import { GridColDef } from '@mui/x-data-grid';

export const orderColumns: GridColDef[] = [
    { field: 'Orfiche_Ref', headerName: 'Fiş Ref', width: 120, align: 'left' },
    { field: 'Orfiche_Date', headerName: 'Fiş Tarihi', width: 160, align: 'center' },
    { field: 'Orfiche_Fiche_No', headerName: 'Fiş No', width: 160, align: 'left' },
    { field: 'Clard_Defination', headerName: 'Müşteri Adı', width: 280, align: 'left' },
    { field: 'Orfiche_Net_Total', headerName: 'Net Toplam', width: 150, type: 'number', align: 'right' },
    { field: 'Branch', headerName: 'Şube Adı', width: 150, align: 'left' },
    { field: 'Name', headerName: 'Depo Adı', width: 150, align: 'left' },
    { field: 'Orfiche_Status', headerName: 'Sipariş Durumu', width: 150, align: 'center' },
    { field: 'Slsman_Ref', headerName: 'Satış Temsilcisi Ref', width: 150, align: 'left' },
    { field: 'Slsman_Defination', headerName: 'Satış Temsilcisi Adı', width: 200, align: 'left' },
];
