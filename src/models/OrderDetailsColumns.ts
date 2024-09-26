import { GridColDef } from '@mui/x-data-grid';

export const orderDetailsColumns: GridColDef[] = [
    { field: 'stok_Kodu', headerName: 'Stok Kodu', width: 150, align: 'center' },
    { field: 'aciklama', headerName: 'Açıklama', width: 200, align: 'center' },
    { field: 'miktar', headerName: 'Miktar', width: 60, align: 'center' },
    { field: 'teslim_Edilen_Miktar', headerName: 'Teslim Edilen Miktar', width: 150, align: 'center' },
    { field: 'bekleyen_Miktar', headerName: 'Bekleyen Miktar', width: 150, align: 'center' },
    { field: 'birim', headerName: 'Birim', width: 60, align: 'center' },

];

