import React from "react";
import "./City.css";
import { Link } from "react-router-dom";

function City() {
  return (
    <div>
      <div className="Navbar">
        <div className="logo">
          <span className="firstlogo">Viet</span>
          <span className="secondlogo">Dests</span>
        </div>
        <div className="button_space">
          <Link to="/">
            <p className="button">HOME</p>
          </Link>
          <Link to="/aboutus">
            <p className="button">ABOUT US</p>
          </Link>
          <Link to="/search">
            <p className="button">ALL TOURS</p>
          </Link>
          <div className="log_re">
            <Link to="/Login">
              <p>LOGIN</p>
            </Link>
            <p className="line">&#124;</p>
            <Link to="/Signup">
              <p>REGISTER</p>
            </Link>
          </div>
        </div>
      </div>
      <div class="header">
        <h1>Ho Chi Minh City</h1>
      </div>

      <div class="container">
        <div class="content">
          <h2>Ho Chi Minh City Travel Guide</h2>
          <p>
            Ho Chi Minh City was formerly known as Saigon. It is one of
            Vietnam's liveliest cities and a hub for commerce and culture. This
            place has all kinds of classically elegant French buildings that
            were left behind from the colonial period. You will feel almost as
            if you are in Paris. Apart from the sightseeing tours of places like
            the Notre-Dame Cathedral Basilica of Saigon, the Ho Chi Minh City
            City Hall and the Municipal Theatre, you can witness more grand
            French-style architecture off the beaten path by visiting the
            Central Post Office and mail a post card. At the Reunification
            Palace and the War Remnants Museum you can learn about Vietnam's
            more recent history, take a boat trip along the Mekong River, or
            enjoy a cup of Vietnamese coffee in an old French-style café. Phạm
            Ngũ Lão Street is very quiet and peaceful during daylight hours.
            Once night falls, however, this place comes alive. Not only an
            excellent place to enjoy the city's nightlife, it is also a favorite
            place for backpackers to stay.
          </p>
        </div>

        <div class="popular-attractions">
          <h3>Popular Attractions</h3>
          <div class="attraction-list">
            <div class="attraction-item saigon-post">
              <h4>Saigon Central Post Office</h4>
              <p>4.7/5 | 1,378 Reviews</p>
            </div>
            <div class="attraction-item reunification-palace">
              <h4>Reunification Palace</h4>
              <p>4.7/5 | 2,910 Reviews</p>
            </div>
            <div class="attraction-item notre-dame">
              <h4>Notre-Dame Cathedral Basilica</h4>
              <p>4.8/5 | 1,850 Reviews</p>
            </div>
          </div>
        </div>

        <div class="popular-tours">
          <h3>Popular Tours</h3>
          <div class="tour-list">
            <div class="tour-item tour-1">
              <h4>
                Mekong Delta 1 Day Tour | Option: Small Group - Better Lunch
              </h4>
              <p class="rating">⭐ 4.5/5 | 900+ Booked</p>
              <p>Departs from Ho Chi Minh City</p>
            </div>
            <div class="tour-item tour-2">
              <h4>One-day tour to Halong Bay, Vietnam</h4>
              <p class="rating">⭐ 4.5/5 | 900+ Booked</p>
              <p>Departs from Hanoi</p>
            </div>
            <div class="tour-item tour-3">
              <h4>
                Mekong Delta 1 Day Tour | Option: Small Group - Better Lunch
              </h4>
              <p class="rating">⭐ 4.5/5 | 900+ Booked</p>
              <p>Departs from Ho Chi Minh City</p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="contact">
          <h2>Contact us</h2>
          <p>Hotline: 0909 - 4567 - 89</p>
          <p>Social media:</p>
          <div className="icon">
            <img className="icon-img" src="facebook.png" alt="" />
            <img className="icon-img" src="insta.png" alt="" />
            <img className="icon-img" src="tiktok.png" alt="" />
          </div>
        </div>
        <div className="about">
          <h2>About</h2>
          <p>About us</p>
        </div>
        <div className="payment">
          <h2 className="patment-text">Payment methods</h2>
          <div className="payment-space">
            <img className="icon-payment" src="AlipayHK.png" alt="" />
            <img className="icon-payment" src="americanexpress.png" alt="" />
            <img className="icon-payment" src="googlepay.png" alt="" />
            <img className="icon-payment" src="samsungpay.png" alt="" />
            <img className="icon-payment" src="wechatpay.png" alt="" />
            <img className="icon-payment" src="applepay.png" alt="" />
            <img className="icon-payment" src="mastercard.png" alt="" />
            <img className="icon-payment" src="visa.png" alt="" />
            <img className="icon-payment" src="paypal.png" alt="" />
            <img className="icon-payment" src="gcash.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default City;
