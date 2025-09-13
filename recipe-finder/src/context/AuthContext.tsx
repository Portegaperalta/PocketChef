import { createContext, useContext, useState, useEffect } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateEmail,
    updatePassword,
} from 'firebase/auth'
import type { User, UserCredential } from 'firebase/auth';
import { auth } from '../firebase/config'
import type { AuthContextType, AuthProviderProps } from '../types/auth';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context
}

export function AuthProvider({ children }: AuthProviderProps) {
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Sign up function
    function signup(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login function
    function login(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(auth, email, password);
    }

    //Register function
    function register(email: string, password: string) {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Logout function
    function logout(): Promise<void> {
        return signOut(auth);
    }

    //reset password
    function resetPassword(email: string) {
        if (currentUser) {
            return updateEmail(currentUser, email);
        }
        return Promise.reject('No user logged in')
    }

    //Update password
    function updateUserPassword(password: string) {
        if (currentUser) {
            return updatePassword(currentUser, password);
        }
        return Promise.reject('No user logged in')
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe
    }, []);

    const value: AuthContextType = {
        currentUser,
        signup,
        login,
        register,
        logout,
        loading,
        resetPassword,
        updateUserPassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}