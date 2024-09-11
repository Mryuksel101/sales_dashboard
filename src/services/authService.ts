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
        });

        const { isError, errorMessage, token } = response.data;

        if (isError) {
            throw new Error(errorMessage);
        }

        // Token'ı localStorage'a kaydet
        //localStorage.setItem('token', token);

        return response.data;
    } catch (error: any) {
        throw new Error(error.response?.data?.errorMessage || 'Login failed');
    }
};
