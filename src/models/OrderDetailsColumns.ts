import { GridColDef } from '@mui/x-data-grid';

export const orderDetailsColumns: GridColDef[] = [
    { field: 'stok_Kodu', headerName: 'Stok Kodu', width: 250, align: 'left' },
    { field: 'aciklama', headerName: 'Açıklama', width: 300, align: 'left' },
    // add tarih column
    { field: 'Tarih', headerName: 'Tarih', width: 200, align: 'left' },
    { field: 'miktar', headerName: 'Miktar', width: 120, align: 'center', },
    { field: 'teslim_Edilen_Miktar', headerName: 'Teslim Edilen Miktar', width: 180, align: 'center' },
    { field: 'bekleyen_Miktar', headerName: 'Bekleyen Miktar', width: 180, align: 'center' },
    { field: 'birim', headerName: 'Birim', width: 100, align: 'center' },
    {
        field: 'editableQuantity',
        headerName: 'Adet Gir',
        width: 150,
        editable: true,
        type: 'number',
        align: 'right',
        description: 'Adet Giriniz',
    },
];
