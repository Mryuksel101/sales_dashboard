import axios from 'axios';

const API_URL = 'http://192.168.0.247/Auth';

interface SignInResponse {
    isError: boolean;
    errorMessage: string;
    token: string;
}


export const signIn = async (userName: string, password: string): Promise<SignInResponse> => {
    try {
        const response = await axios.post<SignInResponse>(API_URL, {
            userName,
            password,
        }, {
            timeout: 5000, // 5 saniyelik zaman aşımı
        });

        const { isError, errorMessage, token } = response.data;

        if (isError) {
            throw new Error(errorMessage);
        }

        // Token'ı localStorage'a kaydet
        // localStorage.setItem('token', token);

        return response.data;
    } catch (error: any) {
        if (axios.isAxiosError(error)) {
            // Axios hatası olup olmadığını kontrol et
            if (error.code === 'ECONNABORTED') {
                throw new Error('Request timed out');
            }
            if (error.response) {
                // Sunucu hatası (4xx, 5xx)
                throw new Error(error.response.data?.errorMessage || 'Server error occurred during sign-in.');
            } else if (error.request) {
                // İstek gönderildi fakat yanıt alınamadı
                throw new Error('Network Error');
            } else {
                // İstek oluşturulurken bir hata oluştu
                throw new Error(`Error in request: ${error.message}`);
            }
        } else {
            // Axios dışındaki genel hatalar
            throw new Error(error.message);
        }
    }
};

