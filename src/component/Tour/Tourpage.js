import React from 'react'
import Navbar from '../Aboutus/Navbar.js'
import Footer from '../Aboutus/Footer.js'
import './Tourpage.css'

const Tourpage = () => {
    return (
        <div className='tourpage'>
            <Navbar />
            <div className='tourpage-title'>
                <h1 className='tourpage-title-text'>Mekong Delta 1 Day Tour | Option: Small Group - Better Lunch</h1>
                <div className='tourpage-title-sub'>
                    <div className='tourpage-rating'>4.5/5</div>
                    <div className='tourpage-review'>1,011 Reviews</div>
                    <hr className='tourpage-line'></hr>
                    <div className='tourpage-booked'>900+ Booked</div>
                </div>
            </div>
            <div className='tourpage-info-1'>
                <img className='tourpage-pic' src='https://ak-d.tripcdn.com/images/0351112000csu19f35776_C_1136_640_Q60.jpg' alt='' />
                <div className='tourpage-price'>
                    <p>Price</p>
                    <h2>US $11.12</h2>
                    <button className='tourpage-book-button'>Book now</button>
                </div>
            </div>
            <div className='tourpage-info-2'>
                <h1>Activity highlight</h1>
                <p>Enjoy the view of the Mekong Delta while driving.</p>
                <p>Tour by local motorbike on Mekong driver to see the islands.</p>
                <p>Visit the beekeeping area to get pure honey from nature, taste honey wine...</p>
                <p>Visit the coconut candy factory, enjoy fresh and clean fruits.</p>
                <p>Go on a boat to see the river.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Tourpage
