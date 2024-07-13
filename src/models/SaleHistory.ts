interface SaleHistory {
    id: number;
    date: Date;
    product: string;
    revenue: number;
    category: string;
    quantity: string;
}

function fromJson(json: any): SaleHistory {
    return {
        id: json.id,
        date: new Date(json.date),
        product: json.product,
        revenue: parseFloat(json.revenue) || 0,
        category: json.category,
        quantity: json.quantity,
    };
}

export { fromJson }; export type { SaleHistory };

