import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Aboutus from './component/Aboutus/Aboutus.js';
import Home from './component/Home/Home.js';
import Searchpage from './component/Search/Searchpage.js';
import SignIn from './component/auth/Signin.jsx';
import SignUp from './component/auth/Signup.jsx';
import City from './component/Citypage/City.js';
import MienNam from './component/MienNam/Miennam.js'
import MienBac from './component/MienBac/Mienbac.js'
import MienTrung from './component/MiienTrung/Mientrung.js'
import Tourpage from './component/Tour/Tourpage.js';
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
                    <Route path='/hochiminh' element={<City />}/>
                    <Route path='/miennam' element={<MienNam />}/>
                    <Route path='/mienbac' element={<MienBac />}/>
                    <Route path='/mientrung' element={<MienTrung />}/>
                    <Route path='/hochiminh' element={<City />}/>
                    <Route path='/tourpage1' element={<Tourpage />}/>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
