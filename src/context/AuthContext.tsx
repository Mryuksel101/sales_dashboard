import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    user: any;
    signin: (user: string, callback: () => void) => void;
    signout: (callback: () => void) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<any>(null);

    const signin = (newUser: string, callback: () => void) => {
        setUser(newUser);
        callback();
    };

    const signout = (callback: () => void) => {
        setUser(null);
        callback();
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
