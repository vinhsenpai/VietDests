import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { useAuth } from '../auth/AuthContext'; // Adjust the path as needed
import { auth } from '../../firebase';
import './Navbar.css';

function Navbar() {
    const { authUser, role } = useAuth(); // Use the auth context
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/signin'); // Redirect to sign-in page after sign out
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    return (
        <div className='Navbar'>
            <div className='logo'>
                <span className='firstlogo'>Viet</span>
                <span className='secondlogo'>Dests</span>
            </div>
            <div className='button_space'>
                <Link to="/" className='no-underline'><p className='button'>HOME</p></Link>
                <Link to="/aboutus" className='no-underline'><p className='button'>ABOUT US</p></Link>
                <Link to="/search" className='no-underline'><p className='button'>ALL TOURS</p></Link>

                {/* Conditionally render Dashboard link if user is admin */}
                {role === 'admin' && (
                    <Link to="/dashboard" className='no-underline'><p className='button'>DASHBOARD</p></Link>
                )}

                <div className='log_re'>
                    {authUser ? (
                        <>
                            <p>WELCOME, {authUser.displayName || "User"}</p>
                            <p className='line'>&#124;</p>
                            <p onClick={handleLogout} className='logout-button'>LOGOUT</p>
                        </>
                    ) : (
                        <>
                            <Link to="/signin" className='no-underline'><p>LOGIN</p></Link>
                            <p className='line'>&#124;</p>
                            <Link to="/signup" className='no-underline'><p>REGISTER</p></Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
