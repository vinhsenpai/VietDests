import Navbar from '../Aboutus/Navbar.js'
import { Link } from 'react-router-dom'
import Footer from '../Aboutus/Footer.js'
import './Home.css'

function Home() {
    return (
        <div className='design-page'>
            <Navbar />
            <section className="banner">
                <div classname="groupby">
                    <p className="welcome">Welcome to <span className="highlight">Vietnam</span></p>
                    <p className="style">Your Journeys</p>
                    <p className="style">Create</p>
                    <p className="style">Your Worlds</p>
                    <button className="book-now"><p className='text-booknow'>Book Now</p></button>
                </div>
                <div classname="groupby2">
                    <div className="images">
                        { }
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOOEwYAzzzTFEIZLMgYVRQMShx3w316pLEOVHXRtmQAU23WBk8" alt="Description" />
                        <img className="neh" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR9vEj8hnc2NBA4JnfzFob9EZ0p-398XJEN2kYlTzTInFCnoOnq" alt="Description" />
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE9Qm0qX5_h1w4GZ0ABVnkoBKa3KZLkYfS6c6VwWxJnSIXnwLl" alt="Description" />
                        <img className="neh" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQsfXaZpmX5mSTrWrL-f7UUpQ0JQHn1KNII6AV_M8d-O7g6Al5w" alt="Description" />
                        <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTe6bHC4VwfOxp4RNN8LcEU9hLWVVrAXomx1ZEEg_edYk9i6Z2z" alt="Description" />
                    </div>
                </div>
            </section>
            <section className="Banner2">
                <div className="groupby3">
                    <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSJYjklO8IZpFWmqNXOblkIbAfE3WjJtGG6nELRGlZ63pKcbwRN" alt="Description" />
                </div>
                <div className="groupby4">
                    <div className="beep">
                        <p>INTRODUCTION</p>
                    </div>
                    <div className="tety">
                        <p>Vietnam is a captivating travel destination known for its stunning natural landscapes, rich cultural heritage, and vibrant cities. From the emerald waters of Ha Long Bay to the terraced rice fields of Sapa, and the historic streets of Hanoi to the bustling energy of Ho Chi Minh City, Vietnam offers a diverse range of experiences. Visitors can explore ancient temples, enjoy delicious cuisine, and immerse themselves in the country's deep history and traditions. Whether you're seeking adventure, relaxation, or cultural exploration, Vietnam has something for every traveler.</p>
                    </div>
                </div>
            </section>
            <section className="Banner3">
                <header className="hese">
                    <div className="contai">
                        <h1 className="pip">Your Trip Starts Here</h1>
                        <div className="background-search">
                            <img className="search-icon-home" src="search.png" alt="" />
                            <button className="search-button-home">Search</button>
                            <input type="text" placeholder="Please enter your search" className="input-search-home"></input>
                        </div>
                    </div>
                </header>
            </section>
            <section className="Final">
                <header className="toto">
                    <div className="choose-des-area">
                        <div className='choose-des-space'>
                            <p className="choose-des-text-1">Your Type Your Choose</p>
                            <p className="choose-des-text-2">Choose Your Destination</p>
                            <Link to="/mienbac"><button className="mien-home">
                                <p className="mien-viettext">Miền Bắc</p>
                                <p className="mien-engtext">(North)</p>
                            </button></Link>
                            <Link to="/miennam"><button className="mien-home">
                                <p className="mien-viettext">Miền Nam</p>
                                <p className="mien-engtext">(South)</p>
                            </button></Link>
                            <Link to="/mientrung"><button className="mien-home">
                                <p className="mien-viettext">Miền Trung</p>
                                <p className="mien-engtext">(Central)</p>
                            </button></Link>
                        </div>
                    </div>
                    <div className='popular-homespace'>
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
                </header>
            </section>
        </div >
    )
}
export default Home