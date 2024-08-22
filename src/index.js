import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
// import Navbar from './component/Navbar.js';
// import Background from './component/Background.js';
// import Approach from './component/Approach.js';
// import Member from './component/Member.js';
// import Footer from './component/Footer.js';
import App from './App.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Aboutus from './component/Aboutus/Aboutus.js'
import Home from './component/Home/Home.js'
import Searchpage from './component/Search/Searchpage.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>                   
        <Routes>
            <Route path='/home' element={<Home/>} />
            <Route path='/aboutus' element={<Aboutus />} />
            <Route path='/search' element={<Searchpage />} />
            {/* <Route path="signin" element={<Signin />} />
            <Route path="register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
