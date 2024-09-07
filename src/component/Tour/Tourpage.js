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
                <ul>
                    <li>Enjoy the view of the Mekong Delta while driving.</li>
                    <li>Tour by local motorbike on Mekong driver to see the islands.</li>
                    <li>Visit the beekeeping area to get pure honey from nature, taste honey wine...</li>
                    <li>Visit the coconut candy factory, enjoy fresh and clean fruits.</li>
                    <li>Go on a boat to see the river.</li>
                </ul>
            </div>
            <div className='tourpage-info-3'>
                <h1>Itinerary</h1>
                <p>Day 1</p>
                <ul>
                    <li>07:30 Meeting point：177 De Tham, District 1, Ho Chi Minh City, Vietnam VN Lotus Travel provides pick-up and drop-off services in the central area of ​​District 1, including hotels located on the following roads: Ly Tu Trong, Le Thanh Ton, Truong Dinh, Nguyen An Ninh, Phan Chu Trinh, Luu Van Lang, Le Anh Xu, Dong Khoi, Nguyen Hue, Thi Sach, Thu Khoa Huan, Thai Van Lung, Mac Thi Buoi, Ho Huan Nghiep, Nguyen Thai Binh, Le Thi Hong Gam, Bui Thi Xu, Suong Nguyet Anh, Nguyen Van Cu, Ky Con. VN Lotus Travel does not provide pick-up and drop-off services outside the above areas, and guests will meet and end the tour at VN Lotus Travel office (177 De Tham, District 1, Ho Chi Minh City). VN Lotus Travel is not responsible for late arrivals.</li>
                    <li>07:45 Free time:  Meet up and pick up other guests waiting at your central hotel in District 1 15m</li>
                    <li>08:00 Transport:Go to Mekong River Delta by Bus An unforgettable way to see the Mekong Delta along the provincial roads down to Southern Vietnam through rice fields, pine plantations, orchards and small hamlets (2 hour drive).</li>
                    <li>10:00 Activities & Attractions: Mỹ Tho City Gate（Including tickets How to visit:No indoor visits） Arriving at My Tho Gate, you will have a large local motorboat take you to visit the Mekong River (20 minutes by motorboat) to admire the 4 small islands of Dragon Island, Ky Lan Island, Turtle Island, and Phoenix Island. (Note: Only pass by and admire, do not go to the island to visit).</li>
                    <li>10:20 Activities & Attractions: Mekong River Delta（Including tickets How to visit:No indoor visits） We will stop at the famous Ky Lan Island (Con Thoi Son), you will visit natural honey at a bee farm, enjoy honey tea with kumquat, one of the specialty drinks of the people. Mekong people.  Take a comfortable walk on the village road for 5-10 minutes, you will come to a local house to see the local fruit garden, they serve you a variety of tropical fruits, during the time there is a live band, named Traditional folk music - Don Ca Tai Tu (NESCO recognized Don Ca Tai Tu as an amateur musical art and an intangible cultural heritage of humanity on December 5, 2013.)  Then take a rowing boat (20-30 minutes - about 2km) 1 boat can accommodate 3-4 people, local people will row the boat through a small canal, with coconut trees on both sides, the rowing boat will take you to the workshop. making coconut candy, you will be guided how local people make coconut candy by hand, have the opportunity to taste coconut candy with many different flavors, coconut wine, coconut cake..., transfer to a smaller motorboat and move along the water. lush green canals.</li>
                    <li>14:20 Lunch: Included, Local specialtiesDining location: Local Restaurant Stop at a local restaurant to enjoy a Vietnamese lunch. (at the local restaurant, there are many things to see crocodiles - you can try to see crocodiles here, can see many fish ponds, different small gardens and watch birds, hedgehogs..).</li>
                    <li>15:20 Activities & Attractions: Vinh Trang Pagoda（Including tickets How to visit:No indoor visits） Visit Vinh Trang Pagoda - a temple with a unique architectural style.</li>
                    <li>15:35 Return and end the tour: Return to 177 De Tham, District 1, Ho Chi Minh CIty, Vietnam by Bus and end the tour Take the bus back to Ho Chi Minh City, arriving around 5.30pm.</li>
                </ul>
                <h2>*Itinerary times are in the local time of the place of visit and may be subject to changes due to weather conditions, road conditions, and other factors. We appreciate your understanding.</h2>
            </div>
            <div className='tourpage-info-4'>
                <h1>Inclusions</h1>
                <ul>
                    <li>Itinerary : Mekong River 1 Day</li>
                    <li>Transport</li>
                    <li>Round-trip bus fee</li>
                    <li>Tickets and Ground Projects</li>
                    <li>Mỹ Tho City Gate and Mekong River Delta and Vinh Trang Pagoda main attraction admission fee</li>
                    <li>Meals</li>
                    <li>Included 1 meals: 1 lunch.</li>
                    <li>Accompanying Tour Staff</li>
                    <li>Tour guide service</li>
                    <li>Equipment</li>
                    <li>My Tho English audio guide</li>
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Tourpage
