import axios from 'axios';
import { API_CONSTANTS } from '../constants/apiConstants';

export const getDataSales = async () => {
    try {
        const response = await axios.get(`${API_CONSTANTS.DATA_SALES.BASE_URL}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching data sales:", error);
        throw error;
    }
};
