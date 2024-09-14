import axios from 'axios';

const API_URL = 'http://192.168.0.247/Auth';

interface SignInResponse {
    isError: boolean;
    errorMessage: string;
    token: string;
}


export const signIn = async (userName: string, password: string,): Promise<SignInResponse> => {
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
        // Cookie'ye token'ı kaydet
        setCookie('token', token, 1); // 1 saat

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

// Cookie oluşturma fonksiyonu
const setCookie = (name: string, value: string, hours: number) => {
    const date = new Date();
    date.setTime(date.getTime() + (hours * 60 * 60 * 1000)); // 1 saat
    const expires = `expires=${date.toUTCString()}`;
    document.cookie = `${name}=${value}; ${expires}; path=/`;
};

// Cookie'den belirli bir anahtarla değer çekme fonksiyonu
export const getCookie = (name: string): string | null => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    if (match) {
        return match[2];
    }
    return null;
};

// cookie'yi sil
export const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

