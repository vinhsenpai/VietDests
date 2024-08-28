import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Aboutus from './component/Aboutus/Aboutus.js';
import Home from './component/Home/Home.js';
import Searchpage from './component/Search/Searchpage.js';
import SignIn from './component/auth/Signin.jsx';
import SignUp from './component/auth/Signup.jsx';
import { AuthProvider } from '../src/component/auth/AuthContext.jsx'; // Import the AuthProvider

function App() {
    return (
        <AuthProvider> {/* Wrap the Routes with AuthProvider */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/search' element={<Searchpage />} />
                    <Route path='/signin' element={<SignIn />} />
                    <Route path='/signup' element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
