import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {SaleHistory} from '../models/SaleHistory';
import { useLoaderData } from 'react-router-dom';

// Sütun tanımları
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'date', headerName: 'Tarih', width: 150 },
  { field: 'product', headerName: 'Ürün', width: 150 },
  { field: 'revenue', headerName: 'Gelir', width: 110 },
  { field: 'category', headerName: 'Kategori', width: 150 },
  { field: 'quantity', headerName: 'Adet', width: 110 },
];

const SaleHistoryDataGrid: React.FC = () => {
  const rows: SaleHistory[] = useLoaderData() as SaleHistory[];
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns}/>
    </div>
  );
};

export default SaleHistoryDataGrid;
