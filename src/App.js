import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import Aboutus from './component/Aboutus/Aboutus.js'
import Home from './component/Home/Home.js'

function App() {                
    return (
      <BrowserRouter>                   
        <Routes>
            <Route path='home' element={<Home />} />
            <Route path='aboutus' element={<Aboutus />} />
            {/* <Route path="signin" element={<Signin />} />
            <Route path="register" element={<Register />} /> */}
        </Routes>
      </BrowserRouter>
    );
}
export default App