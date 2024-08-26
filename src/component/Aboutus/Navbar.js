import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from '../../firebase'; // Đảm bảo đường dẫn tới firebase đúng
import { signOut } from 'firebase/auth';

function Navbar() {
    const [user, setUser] = useState(null); // State để lưu thông tin người dùng
    const navigate = useNavigate();

    useEffect(() => {
        // Lắng nghe sự thay đổi trạng thái đăng nhập
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                setUser(user); // Người dùng đã đăng nhập
            } else {
                setUser(null); // Người dùng đã đăng xuất
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/signin'); // Điều hướng đến trang đăng nhập sau khi đăng xuất
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
                <div className='log_re'>
                    {user ? (
                        <>
                            <p>WELCOME, {user.displayName || "User"}</p>
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
