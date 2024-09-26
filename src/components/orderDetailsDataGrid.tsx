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
    return (
        <div style={{ height: 'calc(-109px + 100vh)', width: '100%', paddingTop: '16px' }}>
            <DataGrid
                loading={loading}
                rows={orderDetailsResponse.orderDetails}
                columns={orderDetailsColumns}
                getRowId={(row: OrderDetail) => row.id} // Unique ID


            />
        </div>
    );
};

export default OrderDetailsDataGrid;
