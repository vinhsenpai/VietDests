import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, async (user) => {
            if (user) {
                let role = 'user'; // Default role
                
                if (user.email.includes('admin')) {
                    role = 'admin'; // Assign admin role if email contains 'admin'
                } else {
                    try {
                        const db = getFirestore();
                        const userDoc = doc(db, 'users', user.uid);
                        const userSnap = await getDoc(userDoc);
                        
                        if (userSnap.exists()) {
                            role = userSnap.data().role || 'user'; // Use role from Firestore or default to 'user'
                        } else {
                            console.log('No such document!');
                        }
                    } catch (error) {
                        console.error('Error fetching user role:', error);
                    }
                }
                
                setAuthUser(user);
                setUserRole(role);
                console.log(`User role: ${role}`);
            } else {
                setAuthUser(null);
                setUserRole(null);
            }
        });

        return () => {
            listen();
        };
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successfully');
        }).catch(error => console.log(error));
    };

    return (
        <div>
            {authUser ? (
                <>
                    <p>{`Signed In as ${authUser.email}`}</p>
                    <p>{`Role: ${userRole}`}</p> {/* Display the user role */}
                    <button onClick={userSignOut}>Sign Out</button>
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    );
};

export default AuthDetails;
