// models/orderDetailsColumns.ts
import { GridColDef } from '@mui/x-data-grid';

export const orderDetailsColumns: GridColDef[] = [
    { field: 'Cari_Hesap_Kodu', headerName: 'Cari Hesap Kodu', width: 150 },
    { field: 'Unvan', headerName: 'Unvan', width: 200 },
    { field: 'CH_Ozel_Kod', headerName: 'CH Özel Kod', width: 150 },
    { field: 'CH_Ozel_Kod_2', headerName: 'CH Özel Kod 2', width: 150 },
    { field: 'CH_Ozel_Kod_3', headerName: 'CH Özel Kod 3', width: 150 },
    { field: 'CH_Ozel_Kod_4', headerName: 'CH Özel Kod 4', width: 150 },
    { field: 'CH_Ozel_Kod_5', headerName: 'CH Özel Kod 5', width: 150 },
    { field: 'Orfiche_No', headerName: 'Orfiche No', width: 150, type: 'number' },
    { field: 'Fatura_Turu', headerName: 'Fatura Türü', width: 150, type: 'number' },
    { field: 'Fatura_No', headerName: 'Fatura No', width: 150 },
    { field: 'Tarih', headerName: 'Tarih', width: 150, type: 'date', valueFormatter: (params: any) => new Date(params.value).toLocaleDateString() },
    { field: 'Ay', headerName: 'Ay', width: 100 },
    { field: 'Ambar_No', headerName: 'Ambar No', width: 120, type: 'number' },
    { field: 'Ambar_Adi', headerName: 'Ambar Adı', width: 150 },
    { field: 'Sube_No', headerName: 'Şube No', width: 120, type: 'number' },
    { field: 'Sube_Adi', headerName: 'Şube Adı', width: 150 },
    { field: 'Stok_Ref', headerName: 'Stok Ref', width: 120, type: 'number' },
    { field: 'Stok_Kodu', headerName: 'Stok Kodu', width: 150 },
    { field: 'Aciklama', headerName: 'Açıklama', width: 200 },
    { field: 'Birim', headerName: 'Birim', width: 100 },
    { field: 'Stok_Ozel_Kod', headerName: 'Stok Özel Kod', width: 150 },
    { field: 'Stok_Ozel_Kod_Aciklama', headerName: 'Stok Özel Kod Açıklama', width: 200 },
    { field: 'Stok_Ozel_Kod_Aciklama_2', headerName: 'Stok Özel Kod Açıklama 2', width: 200 },
    { field: 'Stok_Ozel_Kod_Aciklama_3', headerName: 'Stok Özel Kod Açıklama 3', width: 200 },
    { field: 'Stok_Ozel_Kod_Aciklama_4', headerName: 'Stok Özel Kod Açıklama 4', width: 200 },
    { field: 'Stok_Ozel_Kod_Aciklama_5', headerName: 'Stok Özel Kod Açıklama 5', width: 200 },
    { field: 'Grup_Kodu', headerName: 'Grup Kodu', width: 150 },
    { field: 'Miktar', headerName: 'Miktar', width: 120, type: 'number' },
    { field: 'Birim_Fiyat', headerName: 'Birim Fiyat', width: 120, type: 'number' },
    { field: 'Toplam', headerName: 'Toplam', width: 120, type: 'number' },
    { field: 'Indirim', headerName: 'İndirim', width: 120, type: 'number' },
    { field: 'Kdv', headerName: 'KDV', width: 120, type: 'number' },
    { field: 'Net_Toplam', headerName: 'Net Toplam', width: 150, type: 'number' },
    { field: 'Kdvli_Toplam', headerName: 'KDV\'li Toplam', width: 150, type: 'number' },
    { field: 'Satis_Temsilcisi', headerName: 'Satış Temsilcisi', width: 150 },
    { field: 'Satis_Temsilcisi_Ref_No', headerName: 'Satış Temsilcisi Ref No', width: 150, type: 'number' },
];
