import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase'; // Đảm bảo đường dẫn tới firebase đúng
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link ,useNavigate } from 'react-router-dom';
import './Signin.css'

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const [error, setError] = useState('');

    const handleEmailSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User signed in:', userCredential.user);
                setError('');
                navigate('/'); // Điều hướng đến trang chủ sau khi đăng nhập thành công
            })
            .catch((error) => {
                console.error('Error signing in with email:', error);
                setError('Wrong Email or Password');
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log('User signed in with Google:', result.user);
                navigate('/'); // Điều hướng đến trang chủ sau khi đăng nhập thành công
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <div className="login-container-2">
                    <div className="login-quote-box">
                        <span className="login-quote">
                            "Traveling – it leaves you speechless at first, and then turns you
                            into a storyteller." <br />– Ibn Battuta –
                        </span>
                    </div>
                </div>
                <div className="login-container-6">
                    <div className="login-header">
                        <div className="login-logo-container">
                            <div className="login-logo">
                                <span className="login-destt">Viet</span>
                                <span className="login-dest">Dests</span>
                            </div>
                        </div>
                        <p className="login-title">Login</p>
                    </div>

                    <p className="login-welcome-back">
                        Welcome back! Please login to your account
                    </p>
                    <form action="#" method="POST" onSubmit={handleEmailSignIn}>
                        <div className="login-email">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                id="email"
                                name="email"
                                className="login-rectangle-59"
                                required
                                
                            />
                        </div>
                        <div className="login-password">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                name="password"
                                className="login-rectangle-60"
                                required
                            />
                        </div>
                        <div className="login-remember-me-forgot">
                            <div>
                                <input type="checkbox" id="remember" name="remember" />
                                <label htmlFor="remember">Remember Me</label>
                            </div>
                            <a href="#" className="login-forget-password">
                                Forgot Password?
                            </a>
                        </div>
                        <div className="login-container-3">
                            <button type="submit" className="login-account">
                                Login
                            </button>
                        </div>
                        {error && <p className="login-error">{error}</p>}
                    </form>
                    <span className="login-another-method">Another Method</span>
                    <div className="login-social-icons">
                        <FaFacebook size={32} style={{ margin: "0 10px" }} />
                        <button onClick={handleGoogleSignIn}><FaGoogle size={32} style={{ margin: "0 10px" }} /></button>
                        <FaTwitter size={32} style={{ margin: "0 10px" }} />
                    </div>
                    <span className="login-new-user">
                        New user? <Link to="/signup"><a>Register</a></Link>
                    </span>
                </div>
            </div>  
        </div>
    );
};

export default SignIn;
