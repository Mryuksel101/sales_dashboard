// services/orderService.ts
import axios from 'axios';
import { GetOrderDetailsResponse } from '../models/OrderDetailModel';

const API_URL = 'http://192.168.0.247/OrderDetail';

interface OrderDetailParams {
    OrficheRef: number;
    token: String;
    paggingSetting: {
        start: number;
        length: number;
    };
}

export const getOrderDetails = async (params: OrderDetailParams): Promise<GetOrderDetailsResponse> => {
    try {
        const response = await axios.get<GetOrderDetailsResponse>(API_URL, {
            headers: {
                Authorization: `Bearer ${params.token}`, // Token'ı Authorization header'ına ekliyoruz
            },
            params: {
                OrficheRef: params.OrficheRef,
                'paggingSetting.start': params.paggingSetting.start,
                'paggingSetting.length': params.paggingSetting.length
            }
        });

        response.data.OrderDetails = response.data.OrderDetails.map((orderDetail, index) => {
            return {
                ...orderDetail,
                Tarih: new Date(orderDetail.Tarih).toLocaleString('tr-TR', {
                    day: '2-digit',    // Day in 2-digit format
                    month: '2-digit',  // Month in 2-digit format
                    year: 'numeric',   // Full year
                    hour: '2-digit',   // Hour in 2-digit format
                    minute: '2-digit', // Minute in 2-digit format
                    second: '2-digit', // Second in 2-digit format (optional)
                    hour12: false      // Use 24-hour format
                }),
                id: index + 1,
            };
        });

        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                throw new Error(error.response.data?.errorMessage || 'Error fetching order details');
            } else if (error.request) {
                throw new Error('Network Error');
            } else {
                throw new Error(`Error in request: ${error.message}`);
            }
        } else {
            throw new Error('An unexpected error occurred.');
        }
    }
};
