import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Aboutus from './component/Aboutus/Aboutus.js'
import Home from './component/Home/Home.js'
import Searchpage from './component/Search/Searchpage.js'
import SignIn from './component/auth/Signin.jsx';
import SignUp from './component/auth/Signup.jsx';

function App() {                
    return (
      <BrowserRouter>                   
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/search' element={<Searchpage />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="register" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    );
}
export default App