import '../Aboutus/Navbar.css'
import './Searchbar.css'
import '../Aboutus/Footer.css'
import Footer from '../Aboutus/Footer.js'
import Navbar from '../Aboutus/Navbar.js'
import { Link } from 'react-router-dom'

function Searchpage() {
    return (
        <div className='design-page'>
            <Navbar />

            <div className='Searchbar'>
                <div className='search-space'>
                    <p className='title-link'>Home > All Tours</p>
                    <div className='search-button'>
                        <button className='des-search'><p className='text-button-1'>Destinations</p></button>
                        <button className='key-search'><p className='text-button-2'>Keywords (Optional)</p></button>
                        <button className='button-search'><img className='img-button' src='search.png' alt='' /></button>
                    </div>
                </div>
            </div>

            <div className='body-space'>
                <div className='tick-space'>
                    <p className='type-text'>Type</p>
                    <div className='tick-box'>
                        <button className='tick-button-1'></button>
                        <p className='tick-text'>All</p>
                    </div>
                    <div className='tick-box'>
                        <button className='tick-button'></button>
                        <p className='tick-text'>Tours</p>
                    </div>
                    <div className='tick-box'>
                        <button className='tick-button'></button>
                        <p className='tick-text'>Attractions</p>
                    </div>
                </div>

                <div className='select-space'>
                    <div className='sort-selection'>
                        <h2 className='sort-text'>Top Rated</h2>
                        <h2 className='line-sort'>&#124;</h2>
                        <h2 className='sort-text'>Most Reviews</h2>
                        <h2 className='line-sort'>&#124;</h2>
                        <h2 className='sort-text'>Lowest Price</h2>
                        <h2 className='line-sort'>&#124;</h2>
                        <h2 className='sort-text'>Highest Price</h2>
                    </div>
                    <div className='tour-space'>
                        <div className='tour-product'>
                            <img className='tour-pic-search' src='nhatrang.png' alt=''></img>
                            <div className='tour-info'>
                                <Link to='/tourpage1'><h2 className='tour-title'>7 Days 6 Night Ho Chi Minh To Mui Ne, Da Lat And Nha Trang Trip</h2></Link>
                                <p className='tour-available'>Available from Aug 17, 2024</p>
                                <div className='tour-rate'>
                                    <div className='border-rate'>
                                        <p className='rate'>5.0/5</p>
                                    </div>
                                    <p className='review-numb'>100 Reviews</p>
                                </div>
                                <h2 className='tour-price'>US $975.00</h2>
                            </div>
                        </div>

                        <div className='tour-product'>
                            <img className='tour-pic-search' src='nhatrang.png' alt=''></img>
                            <div className='tour-info'>
                                <h2 className='tour-title'>7 Days 6 Night Ho Chi Minh To Mui Ne, Da Lat And Nha Trang Trip</h2>
                                <p className='tour-available'>Available from Aug 17, 2024</p>
                                <div className='tour-rate'>
                                    <div className='border-rate'>
                                        <p className='rate'>5.0/5</p>
                                    </div>
                                    <p className='review-numb'>100 Reviews</p>
                                </div>
                                <h2 className='tour-price'>US $975.00</h2>
                            </div>
                        </div>

                        <div className='tour-product'>
                            <img className='tour-pic-search' src='nhatrang.png' alt=''></img>
                            <div className='tour-info'>
                                <h2 className='tour-title'>7 Days 6 Night Ho Chi Minh To Mui Ne, Da Lat And Nha Trang Trip</h2>
                                <p className='tour-available'>Available from Aug 17, 2024</p>
                                <div className='tour-rate'>
                                    <div className='border-rate'>
                                        <p className='rate'>5.0/5</p>
                                    </div>
                                    <p className='review-numb'>100 Reviews</p>
                                </div>
                                <h2 className='tour-price'>US $975.00</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='footer'>
                <div className='contact'>
                    <h2>Contact us</h2>
                    <p>Hotline: 0909 - 4567 - 89</p>
                    <p>Social media:</p>
                    <div className='icon'>
                        <img className='icon-img' src='facebook.png' alt='' />
                        <img className='icon-img' src='insta.png' alt='' />
                        <img className='icon-img' src='tiktok.png' alt='' />
                    </div>
                </div>
                <div className='about'>
                    <h2>About</h2>
                    <p>About us</p>
                </div>
                <div className='payment'>
                    <h2 className='patment-text'>Payment methods</h2>
                    <div className='payment-space'>
                        <img className='icon-payment' src='AlipayHK.png' alt='' />
                        <img className='icon-payment' src='americanexpress.png' alt='' />
                        <img className='icon-payment' src='googlepay.png' alt='' />
                        <img className='icon-payment' src='samsungpay.png' alt='' />
                        <img className='icon-payment' src='wechatpay.png' alt='' />
                        <img className='icon-payment' src='applepay.png' alt='' />
                        <img className='icon-payment' src='mastercard.png' alt='' />
                        <img className='icon-payment' src='visa.png' alt='' />
                        <img className='icon-payment' src='paypal.png' alt='' />
                        <img className='icon-payment' src='gcash.png' alt='' />
                    </div>
                </div>
            </div> */}
            <Footer />
        </div>
    )
}
export default Searchpage