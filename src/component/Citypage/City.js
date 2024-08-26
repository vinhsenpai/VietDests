import React from "react";
import "./City.css";

function City() {
  return (
    <div className="Navbar">
      <div className="logo">
        <span className="firstlogo">Viet</span>
        <span className="secondlogo">Dests</span>
      </div>
      <div className="button_space">
        <p className="button">HOME</p>
        <p className="button">ABOUT US</p>
        <p className="button">ALL TOURS</p>
        <div className="log_re">
          <p>LOGIN</p>
          <p className="line">&#124;</p>
          <p>REGISTER</p>
        </div>
      </div>
    </div>
    
  );
}
export default City;
