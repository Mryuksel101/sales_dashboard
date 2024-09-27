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
        // foormat date day mounth year, hour, minute, second
        response.data.Orders = response.data.Orders.map((order, index) => {
            return {
                ...order,
                Orfiche_Date: new Date(order.Orfiche_Date).toLocaleString('tr-TR', {
                    day: '2-digit',    // Day in 2-digit format
                    month: '2-digit',  // Month in 2-digit format
                    year: 'numeric',   // Full year
                    hour: '2-digit',   // Hour in 2-digit format
                    minute: '2-digit', // Minute in 2-digit format
                    second: '2-digit', // Second in 2-digit format (optional)
                    hour12: false      // Use 24-hour format
                }),
            };
        }
        );
        return response.data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.errorMessage || 'Error while fetching orders');
        } else {
            throw new Error('An unexpected error occurred while fetching orders');
        }
    }
};
