import * as React from 'react';
import { DataGrid, GridColDef, GridRowModel } from '@mui/x-data-grid';
import { SaleHistory } from '../models/SaleHistory';
import { useLoaderData } from 'react-router-dom';
import { Button } from '@mui/material';

// Sütun tanımları
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'date', headerName: 'Tarih', width: 150 },
  { field: 'product', headerName: 'Ürün', width: 150 },
  { field: 'revenue', headerName: 'Gelir', width: 110 },
  { field: 'category', headerName: 'Kategori', width: 150 },
  { field: 'quantity', headerName: 'Adet', width: 110 },
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
  const rows: SaleHistory[] = useLoaderData() as SaleHistory[];
  const [editedRows, setEditedRows] = React.useState<GridRowModel[]>([]);

  const processRowUpdate = React.useCallback(
    (newRow: GridRowModel, oldRow: GridRowModel) => {
      // Editable text'e girilen sayı Row'daki adetten büyük olmaması için kontrol
      const isValueValid = Number(oldRow.quantity) <= newRow.editableQuantity;
      if (!isValueValid) {
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
  };

  return (
    <div className="grow border-2 border-sky-500 " style={{ width: '100%', }}>
      <div>
        <DataGrid
          rows={rows}
          columns={columns}
          processRowUpdate={processRowUpdate}
        //sx={{ '& .MuiDataGrid-cell--editable': { backgroundColor: 'rgba(0, 0, 0, 0.04)' } }}
        />
      </div>
      <Button
        variant="contained"
        color="primary"
        onClick={handleApiCall}
        style={{ marginTop: '20px' }}
      >
        Değişiklikleri Kaydet
      </Button>
    </div >
  );
};

export default SaleHistoryDataGrid;