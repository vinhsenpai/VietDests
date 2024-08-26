import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from 'react';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState(""); // State for firstname
    const [lastname, setLastname] = useState("");   // State for lastname
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Lưu firstname và lastname vào profile của user
                updateProfile(userCredential.user, {
                    displayName: `${firstname} ${lastname}`
                }).then(() => {
                    console.log("User profile updated successfully");
                    setError("")
                    navigate("/signin")
                }).catch((error) => {
                    console.log("Error updating user profile:", error);
                    setError("Fail to create your account")
                });
            })
            .catch((error) => {
                console.log("Error signing up:", error);
            });
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <div className="signup-container-6">
                    <div className="signup-container-1">
                        <form action="#" method="POST" onSubmit={handleSignUp}>
                            <header>
                                <div className="signup-logo">
                                    <span className="signup-destt">Viet</span>
                                    <span className="signup-dest">Dests</span>
                                </div>
                            </header>
                            <p className="signup-create-new-account-title">
                                Create new account
                            </p>
                            <div className="signup-container-7">
                                <div className="signup-container-4">
                                    <div className="signup-firstname">
                                        <label htmlFor="firstname">Firstname</label>
                                        <input
                                            type="text"
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            id="firstname"
                                            name="firstname"
                                            className="signup-rectangle-57"
                                            required
                                        />
                                    </div>
                                    <div className="signup-lastname">
                                        <label htmlFor="lastname">Lastname</label>
                                        <input
                                            type="text"
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            id="lastname"
                                            name="lastname"
                                            className="signup-rectangle-58"
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="signup-email">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    id="email"
                                    name="email"
                                    className="signup-rectangle-59"
                                    required
                                />
                            </div>
                            <div className="signup-password">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    className="signup-rectangle-60"
                                    required
                                />
                            </div>
                            <div className="signup-confirm-password">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    name="confirm-password"
                                    className="signup-rectangle-61"
                                    required
                                />
                            </div>
                            <div className="signup-container-3">
                                <button type="submit" className="signup-create-account">
                                    Create Account
                                </button>
                            </div>
                        </form>
                        <span className="signup-already-have-an-account">
                            Already have an account? <a href="#">Login</a>
                        </span>
                    </div>
                </div>
                <div className="signup-container-2">
                    <span className="signup-quote">
                        "Our destination is not a place, but a new way of seeing." – Henry Miller –
                    </span>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
