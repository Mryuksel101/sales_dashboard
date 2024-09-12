import axios from 'axios';

const API_URL = 'http://192.168.0.247/Order';

// Response tiplerini tanımlıyoruz
interface Order {
    Orfiche_Ref: number;
    Orfiche_Date: string;
    Orfiche_Fiche_No: string;
    Clcard_Ref: number;
    Clard_Defination: string;
    Orfiche_Net_Total: number;
    Branch_Nr: number;
    Branch: string;
    WHouse_Nr: number;
    Name: string;
    Orfiche_Status: number;
    Slsman_Ref: number;
    Slsman_Defination: string;
}

export interface GetOrdersResponse {
    Orders: Order[];
    TotalCount: number;
}

// Token ile Order'ları getiren servis
export const getOrders = async (token: string): Promise<GetOrdersResponse> => {
    try {
        const response = await axios.get<GetOrdersResponse>(API_URL, {
            headers: {
                Authorization: `Bearer ${token}`, // Token'ı Authorization header'ına ekliyoruz
            },
        });

        return response.data; // Response içindeki veriyi dönüyoruz
    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.errorMessage || 'Error while fetching orders');
        } else {
            throw new Error('An unexpected error occurred while fetching orders');
        }
    }
};
