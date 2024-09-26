export interface OrderDetail {
    id: number;
    cari_Hesap_RefNo: string;
    cH_Kodu: string;
    unvan: string;
    cH_Ozel_Kod: string;
    cH_Ozel_Kod_2: string;
    cH_Ozel_Kod_3: string;
    cH_Ozel_Kod_4: string;
    cH_Ozel_Kod_5: string;
    ambar_No: number;
    ambar_Adi: string;
    sube_No: number;
    sube_Adi: string;
    fis_RefNo: number;
    orfiche_No: string;
    fis_Turu: number;
    tarih: string;
    stokRef: number;
    stok_Ozel_Kod: string;
    stok_Ozel_Kod_Aciklama: string;
    stok_Ozel_Kod2: string;
    stok_Ozel_Kod_Aciklama2: string;
    stok_Ozel_Kod3: string;
    stok_Ozel_Kod_Aciklama3: string;
    stok_Kodu: string;
    aciklama: string;
    order_Detail_Ref: number;
    miktar: number;
    teslim_Edilen_Miktar: number;
    bekleyen_Miktar: number;
    birim_Fiyat: number;
    toplam: number;
    Iskonto: number;
    net_Toplam: number;
    kdv: number;
    kdVli_Toplam: number;
    uomref: number;
    birim: string;
    usref: number;
    birim_Set: string;
    uinfO1: number;
    uinfO2: number;
    reserv: string;
    gercek_Stok: number;
    satis_Temsilcisi: string;
    satis_Temsilcisi_Ref_No: number;
    devir_Durumu: string;
}

export interface GetOrderDetailsResponse {
    orderDetails: OrderDetail[];
    totalCount: number;
}
