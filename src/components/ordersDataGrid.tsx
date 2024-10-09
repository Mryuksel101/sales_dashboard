import * as React from 'react';
import { DataGrid, GridCellParams, GridRowModel } from '@mui/x-data-grid';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { GetOrdersResponse } from '../services/ordersService.ts';
import { orderColumns } from '../models/OrderColumns.ts';
import { Order } from '../services/ordersService.ts';

const OrdersDataGrid: React.FC = () => {
  const rows: GetOrdersResponse = (useLoaderData() as GetOrdersResponse);
  const [isSaving, setIsSaving] = React.useState(false);
  const [editedRows, setEditedRows] = React.useState<GridRowModel[]>([]);
  const navigate = useNavigate();


  const processRowUpdate = React.useCallback(
    (newRow: GridRowModel<Order>, oldRow: GridRowModel<Order>) => {
      // Editable text'e girilen sayı Row'daki adetten büyük olmaması için kontrol
      const isValueValid = Number(oldRow.editableQuantity) <= newRow.editableQuantity;
      if (isValueValid) {
        alert('Girilen değer, mevcut adetten büyük olamaz. Mevcut değer şu anda: ' + oldRow.editableQuantity);
        return oldRow;
      }
      setEditedRows((prevState) => {
        const newState = [...prevState];
        const index = newState.findIndex((row) => row.Orfiche_Fiche_No === newRow.Orfiche_Fiche_No);
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
    <div style={{
      height: 'calc(100vh - 252px)',
      width: '100%'
    }}>
      <DataGrid
        loading={isSaving}
        rows={rows.Orders}
        columns={orderColumns}
        processRowUpdate={processRowUpdate}
        getRowId={(row: Order) => row.Orfiche_Fiche_No}
        onCellClick={
          (params: GridCellParams<Order>) => {
            if (params.field === 'Orfiche_Fiche_No') {
              //navigate(`/home/deneme`);
              navigate(`/home/order/${params.row.Orfiche_Fiche_No}`);
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