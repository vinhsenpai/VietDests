import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Aboutus from "./component/Aboutus/Aboutus.js";
import Home from "./component/Home/Home.js";
import Searchpage from "./component/Search/Searchpage.js";
import Signup from "./component/Signup/Signup.js";
import Login from "./component/Signup/login.js";
import City from "./component/Citypage/City.js";
import Attraction from "./component/Attractionpage/Attraction.js";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/search" element={<Searchpage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/city" element={<City />} />
        <Route path="/attraction" element={<Attraction />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
