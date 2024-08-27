import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase'; // Ensure the correct path to your firebase config
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import './Signin.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const handleEmailSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User signed in:', userCredential.user);
                setError('');
                fetchUserRole(userCredential.user); // Fetch user role after signing in
                navigate('/'); // Navigate to home page after successful sign-in
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
                fetchUserRole(result.user); // Fetch user role after signing in
                navigate('/'); // Navigate to home page after successful sign-in
            })
            .catch((error) => {
                console.error('Error signing in with Google:', error);
            });
    };

    // Function to fetch the user role from Firestore and log it
    const fetchUserRole = async (user) => {
        let role = 'user'; // Default role
        if (user.email.includes('admin')) {
            role = 'admin'; // If email contains 'admin', assign the admin role
        } else {
            const db = getFirestore();
            const userDoc = await getDoc(doc(db, 'users', user.uid));
            if (userDoc.exists()) {
                role = userDoc.data().role;
            } else {
                console.log('No such document!');
            }
        }
        console.log(`User role: ${role}`); // Log the user role
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
                        <button onClick={handleGoogleSignIn} className='signin-button'><FaGoogle size={32} style={{ margin: "0 10px" }} /></button>
                        <FaTwitter size={32} style={{ margin: "0 10px" }} />
                    </div>
                    <span className="login-new-user">
                        New user? <Link to="/signup" className='no-underline'>Register</Link>
                    </span>
                </div>
            </div>  
        </div>
    );
};

export default SignIn;
