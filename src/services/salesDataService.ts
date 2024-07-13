import axios from 'axios';
import { API_CONSTANTS } from '../constants/apiConstants';
import { fromJson, SaleHistory } from '../models/SaleHistory';


export const getDataSales = async (): Promise<SaleHistory[]> => {
    try {
        const response = await axios.get(`${API_CONSTANTS.DATA_SALES.BASE_URL}`);
        const data = response.data;
        const sales: SaleHistory[] = data.map((sale: any) => fromJson(sale));
        return sales;
    } catch (error) {
        console.error("Error fetching data sales:", error);
        throw error;
    }
};
