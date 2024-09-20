// types/order.ts
export interface OrderDetail {
    id: number;
    Cari_Hesap_Kodu: string;
    Unvan: string;
    CH_Ozel_Kod: string;
    CH_Ozel_Kod_2: string;
    CH_Ozel_Kod_3: string;
    CH_Ozel_Kod_4: string;
    CH_Ozel_Kod_5: string;
    Orfiche_No: number;
    Fatura_Turu: number;
    Fatura_No: string;
    Tarih: string;
    Ay: string;
    Ambar_No: number;
    Ambar_Adi: string;
    Sube_No: number;
    Sube_Adi: string;
    Stok_Ref: number;
    Stok_Kodu: string;
    Aciklama: string;
    Birim: string;
    Stok_Ozel_Kod: string;
    Stok_Ozel_Kod_Aciklama: string;
    Stok_Ozel_Kod_Aciklama_2: string;
    Stok_Ozel_Kod_Aciklama_3: string;
    Stok_Ozel_Kod_Aciklama_4: string;
    Stok_Ozel_Kod_Aciklama_5: string;
    Grup_Kodu: string;
    Miktar: number;
    Birim_Fiyat: number;
    Toplam: number;
    Indirim: number;
    Kdv: number;
    Net_Toplam: number;
    Kdvli_Toplam: number;
    Satis_Temsilcisi: string;
    Satis_Temsilcisi_Ref_No: number;
}

export interface GetOrderDetailsResponse {
    OrderDetails: OrderDetail[];
    TotalCount: number;
}
