// models/ordersColumns.ts
import { GridColDef } from '@mui/x-data-grid';

export const orderColumns: GridColDef[] = [
    { field: 'Orfiche_Ref', headerName: 'Orfiche Ref', width: 100 },
    { field: 'Orfiche_Date', headerName: 'Orfiche Date', width: 180, },
    { field: 'Orfiche_Fiche_No', headerName: 'Orfiche No', width: 150 },
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
