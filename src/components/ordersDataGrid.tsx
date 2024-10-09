import * as React from 'react';
import { DataGrid, GridRowModel } from '@mui/x-data-grid';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { GetOrdersResponse } from '../services/ordersService.ts';
import { orderColumns } from '../models/OrderColumns.ts';

const OrdersDataGrid: React.FC = () => {
  const rows: GetOrdersResponse = (useLoaderData() as GetOrdersResponse);
  const [isSaving, setIsSaving] = React.useState(false);
  const [editedRows, setEditedRows] = React.useState<GridRowModel[]>([]);
  const navigate = useNavigate();


  const processRowUpdate = React.useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => {
      // Editable text'e girilen sayı Row'daki adetten büyük olmaması için kontrol
      const isValueValid = Number(oldRow.quantity) <= newRow.editableQuantity;
      if (isValueValid) {
        alert('Girilen değer, mevcut adetten büyük olamaz. Mevcut değer şu anda: ' + oldRow.quantity);
        return oldRow;
      }
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
    <div style={{
      height: 'calc(100vh - 252px)',
      width: '100%'
    }}>
      <DataGrid
        loading={isSaving}
        rows={rows.Orders}
        columns={orderColumns}
        processRowUpdate={processRowUpdate}
        getRowId={(row) => row.Orfiche_Ref}
        onCellClick={
          (params) => {
            if (params.field === 'Orfiche_Ref') {
              //navigate(`/home/deneme`);
              navigate(`/home/order/${params.row.Orfiche_Ref}`);
            }
          }
        }
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
    </div >
  );
};

export default OrdersDataGrid;