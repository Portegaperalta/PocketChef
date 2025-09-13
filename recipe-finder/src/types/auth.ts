import type { User } from 'firebase/auth'

export interface AuthContextType {
    currentUser: User | null;
    signup: (email: string, password: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    register: (email: string, password: string) => Promise<any>;
    logout: () => Promise<any>;
    resetPassword: (email: string) => Promise<void>;
    updateUserPassword: (password: string) => Promise<void>;
    loading: boolean;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}