import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null);
    const [role, setRole] = useState('user');
    const db = getFirestore();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                setAuthUser(user); // Set the user in the context

                if (user.email.includes('admin')) {
                    setRole('admin');
                } else {
                    try {
                        const userDoc = doc(db, 'users', user.uid);
                        const userSnap = await getDoc(userDoc);
                        
                        if (userSnap.exists()) {
                            setRole(userSnap.data().role || 'user');
                        } else {
                            setRole('user');
                        }
                    } catch (error) {
                        console.error('Error fetching user role:', error);
                        setRole('user');
                    }
                }
            } else {
                setAuthUser(null);
                setRole('user');
            }
        });

        return () => unsubscribe();
    }, [db]);

    return (
        <AuthContext.Provider value={{ authUser, role }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
