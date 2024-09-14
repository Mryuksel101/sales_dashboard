import * as React from 'react';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { GetOrdersResponse } from '../services/ordersService.ts';

// Sütun tanımları
const columns: GridColDef[] = [
  { field: 'Orfiche_Ref', headerName: 'Order Ref', width: 100 },
  { field: 'Orfiche_Date', headerName: 'Order Date', width: 180 },
  { field: 'Orfiche_Fiche_No', headerName: 'Order Fiche No', width: 150 },
  { field: 'Clcard_Ref', headerName: 'Client Ref', width: 100 },
  { field: 'Clard_Defination', headerName: 'Client Name', width: 150 },
  { field: 'Orfiche_Net_Total', headerName: 'Net Total', width: 120, type: 'number' },
  { field: 'Branch_Nr', headerName: 'Branch No', width: 100 },
  { field: 'Branch', headerName: 'Branch', width: 150 },
  { field: 'WHouse_Nr', headerName: 'Warehouse No', width: 120 },
  { field: 'Name', headerName: 'Warehouse Name', width: 150 },
  { field: 'Orfiche_Status', headerName: 'Order Status', width: 120 },
  { field: 'Slsman_Ref', headerName: 'Salesman Ref', width: 120 },
  { field: 'Slsman_Defination', headerName: 'Salesman Name', width: 150 },
  {
    field: 'editableQuantity',
    headerName: 'Adet Gir',
    width: 150,
    editable: true,
    type: 'number',
    align: 'left',
    description: 'Adet Giriniz',
  },
];


const SaleHistoryDataGrid: React.FC = () => {
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
        columns={columns}
        processRowUpdate={processRowUpdate}
        getRowId={(row) => row.Orfiche_Ref}
        onCellClick={
          (params) => {
            if (params.field === 'Orfiche_Ref') {
              navigate(`/home/deneme`);
              //navigate(`/order/${params.row.Orfiche_Ref}`);
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
      <button
        onClick={handleApiCall}
        style={{ marginTop: '40px', marginBottom: '20px' }}
        className={`rounded-3xl bg-blue-500 px-9 py-3 text-base leading-tight text-white ${isSaving ? 'cursor-not-allowed opacity-50' : 'hover:bg-blue-600'} focus:ring-2`}
        disabled={isSaving} // Saving durumunda butonu devre dışı bırak
      >
        {isSaving ? 'Kaydediliyor...' : 'Değişiklikleri Kaydet'}
      </button>

    </div >
  );
};

export default SaleHistoryDataGrid;