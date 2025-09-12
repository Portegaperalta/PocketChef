import type { User } from 'firebase/auth'

export interface AuthContextType {
    currentUser: User | null;
    signup: (email: string, password: string) => Promise<any>;
    login: (email: string, password: string) => Promise<any>;
    logout: () => Promise<any>;
}

export interface AuthProviderProps {
    children: React.ReactNode;
}