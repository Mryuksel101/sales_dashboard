// components/OrderDetailsDataGrid.tsx
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { orderDetailsColumns } from '../models/OrderDetailsColumns';
import { GetOrderDetailsResponse, OrderDetail } from '../models/OrderDetailModel';

interface OrderDetailsDataGridProps {
    orderDetailsResponse: GetOrderDetailsResponse;
    loading: boolean;
}

const OrderDetailsDataGrid: React.FC<OrderDetailsDataGridProps> = ({ orderDetailsResponse, loading }) => {
    //const data: GetOrderDetailsResponse = (useLoaderData() as GetOrderDetailsResponse);
    const rows: OrderDetail[] = (orderDetailsResponse.orderDetails as OrderDetail[]);
    const [isSaving, setIsSaving] = React.useState(false);
    const [editedRows, setEditedRows] = React.useState<OrderDetail[]>([]);

    React.useEffect(() => {
        setIsSaving(loading);
    }, [loading]);

    const processRowUpdate = React.useCallback(
        (newRow: OrderDetail, oldRow: OrderDetail) => {
            setEditedRows((prevState) => {
                const newState = [...prevState];
                const index = newState.findIndex((row) => row.id === newRow.id);
                if (index === -1) {
                    newState.push(newRow);
                } else {
                    newState[index] = newRow;
                }
                return newState;
            });
            return newRow;
        },
        []
    );

    const handleApiCall = () => {
        // API çağrısı burada yapılacak
        console.log('API çağrısı yapılıyor...', editedRows);
        // Örnek: axios.post('/api/update', editedRows);

        setIsSaving(true); // Saving durumunu başlat
        // 2 saniye bekleyin
        setTimeout(() => {
            setIsSaving(false); // Saving durumunu durdur
        }, 2000);
    };
    return (
        <div style={{ height: 'calc(-109px + 100vh)', width: '100%', paddingTop: '16px' }}>
            <DataGrid
                loading={isSaving}
                rows={orderDetailsResponse.orderDetails}
                columns={orderDetailsColumns}
                getRowId={(row: OrderDetail) => row.id} // Unique ID
                sx={
                    {
                        '& .MuiDataGrid-cell--editable': {
                            backgroundColor: 'rgba(0, 0, 0, 0.04)',
                            color: '#000',
                            cursor: 'text', // Changes the cursor to indicate text can be edited
                            transition: 'background-color 0.3s', // Smooths the transition of background color on hover
                            '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.08)',
                                border: '1px solid rgba(0, 0, 0, 0.12)', // Adds a subtle border on hover
                            }
                        },
                        '& .MuiDataGrid-cell--editable:focus-within': {
                            fontWeight: 'bold', // Makes the text bold when the cell is focused for editing
                            border: '2px solid #1976d2', // Highlights the cell with a more pronounced border when focused
                        },

                        // '& .MuiDataGrid-columnsContainer': {
                        //   backgroundColor: '#f5f5f5', // Changes the background color of the column headers
                        // },
                    }
                }

            />

            <button
                onClick={handleApiCall}
                style={{ marginTop: '40px', marginBottom: '20px' }}
                className={`rounded-3xl bg-blue-500 px-9 py-3 text-base leading-tight text-white ${isSaving ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'} focus:ring-2`}
                disabled={isSaving} // Saving durumunda butonu devre dışı bırak
            >
                {isSaving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
            </button>
        </div>
    );
};

export default OrderDetailsDataGrid;
