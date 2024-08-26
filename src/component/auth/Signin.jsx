import React, { useState } from 'react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase'; // Đảm bảo đường dẫn tới firebase đúng
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const handleEmailSignIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log('User signed in:', userCredential.user);
                navigate('/'); // Điều hướng đến trang chủ sau khi đăng nhập thành công
            })
            .catch((error) => {
                console.error('Error signing in with email:', error);
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
        <div className='sign-in-container'>
            <form onSubmit={handleEmailSignIn}>
                <h1>Log in to your account</h1>
                <input
                    type='email'
                    placeholder='Enter your email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='password'
                    placeholder='Enter your password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type='submit'>Log in</button>
            </form>
            <button onClick={handleGoogleSignIn} className='google-signin-button'>
                Sign in with Google
            </button>
        </div>
    );
};

export default SignIn;
