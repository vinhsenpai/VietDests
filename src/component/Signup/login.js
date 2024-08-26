import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import "./login.css";

function Login() {
  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-container-2">
          <div className="login-quote-box">
            <span className="login-quote">
              "Traveling – it leaves you speechless at first, and then turns you
              into a storyteller." <br />– Ibn Battuta –
            </span>
          </div>
        </div>
        <div className="login-container-6">
          <div className="login-header">
            <div className="login-logo-container">
              <div className="login-logo">
                <span className="login-destt">Viet</span>
                <span className="login-dest">Dests</span>
              </div>
            </div>
            <p className="login-title">Login</p>
          </div>

          <p className="login-welcome-back">
            Welcome back! Please login to your account
          </p>
          <form action="#" method="POST">
            <div className="login-email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="login-rectangle-59"
                required
              />
            </div>
            <div className="login-password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                className="login-rectangle-60"
                required
              />
            </div>
            <div className="login-remember-me-forgot">
              <div>
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <a href="#" className="login-forget-password">
                Forgot Password?
              </a>
            </div>
            <div className="login-container-3">
              <button type="submit" className="login-account">
                Login
              </button>
            </div>
          </form>
          <span className="login-another-method">Another Method</span>
          <div className="login-social-icons">
            <FaFacebook size={32} style={{ margin: "0 10px" }} />
            <FaGoogle size={32} style={{ margin: "0 10px" }} />
            <FaTwitter size={32} style={{ margin: "0 10px" }} />
          </div>
          <span className="login-new-user">
            New user? <a href="#">Register</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
