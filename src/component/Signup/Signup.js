import React from "react";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-container-6">
          <div className="signup-container-1">
            <form action="#" method="POST">
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
            <span className="signup-another-method"> Or use another method </span>
            <div className="signup-social-icons">
              <FaFacebook size={32} style={{ margin: "0 10px" }} />
              <FaGoogle size={32} style={{ margin: "0 10px" }} />
              <FaTwitter size={32} style={{ margin: "0 10px" }} />
            </div>
            <div className="signup-container-5">
              <div className="signup-ellipse-10"></div>
              <div className="signup-ellipse-11"></div>
              <div className="signup-ellipse-12"></div>
            </div>
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

export default Signup;
