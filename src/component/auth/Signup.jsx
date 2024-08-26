import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState(""); // State for firstname
    const [lastname, setLastname] = useState("");   // State for lastname
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Lưu firstname và lastname vào profile của user
                updateProfile(userCredential.user, {
                    displayName: `${firstname} ${lastname}`
                }).then(() => {
                    console.log("User profile updated successfully");
                    navigate("/signin")
                }).catch((error) => {
                    console.log("Error updating user profile:", error);
                });
            })
            .catch((error) => {
                console.log("Error signing up:", error);
            });
    };

    return (
        <div className='sign-in-container'>
            <form onSubmit={handleSignUp}>
                <h1>Create Account</h1>
                <input 
                    type='text' 
                    placeholder='Enter your firstname' 
                    value={firstname} 
                    onChange={(e) => setFirstname(e.target.value)} 
                />
                <input 
                    type='text' 
                    placeholder='Enter your lastname' 
                    value={lastname} 
                    onChange={(e) => setLastname(e.target.value)} 
                />
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
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
