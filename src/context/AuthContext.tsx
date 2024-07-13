import React, { createContext, useContext, useState, ReactNode } from 'react';
import { IUser } from '../models/UserModel';

interface AuthContextType {
    user: IUser | null;
    signin: (user: IUser, callback?: () => void) => void;
    signout: (callback?: () => void) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);

    const signin = (newUser: IUser, callback?: () => void) => {
        setUser(newUser);
        callback && callback();
    };

    const signout = (callback?: (() => void)) => {
        setUser(null);
        callback && callback();
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
