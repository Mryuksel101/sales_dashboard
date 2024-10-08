import { createContext, useContext, useState, ReactNode } from 'react';
import { IUser } from '../models/UserModel';
import { signIn } from '../services/authService';

interface AuthContextType {
    user: IUser | null;
    signin: (user: IUser, callback?: () => void) => Promise<void>;
    signout: (callback?: () => void) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);

    const signin = async (formInfo: IUser, callback?: () => void) => {
        try {
            const signInResponse = await signIn(formInfo.name, formInfo.password);
            const user: IUser = {
                name: formInfo.name,
                token: signInResponse.token,
                password: formInfo.password,
                profilePicture: "https://img.icons8.com/?size=100&id=nRzhHJR1Gh7F&format=png&color=000000"
            };
            setUser(user);
            callback && callback();
        } catch (error: any) {
            throw error;
        }
    };

    const signout = (callback?: (() => void)) => {
        try {
            setUser(null);
            callback && callback();
        } catch (error) {
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ user, signin, signout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
