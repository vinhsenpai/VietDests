import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, async (user) => {
          if (user) {
            if (user.email.includes('admin')) {
              // If the email contains 'admin', assign the admin role
              setUserRole('admin');
            } else {
              // Otherwise, fetch the role from Firestore
              const db = getFirestore();
              const userDoc = await getDoc(doc(db, 'users', user.uid));
              if (userDoc.exists()) {
                const role = userDoc.data().role;
                setUserRole(role);
              } else {
                console.log('No such document!');
                setUserRole('user'); // Default role if no document is found
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
    }, [])

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Sign out successfully')
        }).catch(error => console.log(error))
    }
    return (
        <div>
            {authUser ? <><p>{`Signed In as ${authUser.email}`}</p><button onClick={userSignOut}>Sign Out</button></> : <p>Signed Out</p>}
        </div>
    )
}

export default AuthDetails
