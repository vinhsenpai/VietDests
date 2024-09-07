import React from "react";
import "./City.css";
import Navbar from "../Aboutus/Navbar";
import Footer from "../Aboutus/Footer";

function City() {
  return (
    <div>
      <Navbar />
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
      <Footer />
    </div>
  );
}
export default City;
