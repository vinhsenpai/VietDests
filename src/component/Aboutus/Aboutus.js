import React from 'react';
import './Approach.css'
import './Background.css'
import './Footer.css'
import './Member.css'
import './Navbar.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Aboutus() {
  return (
    <div>
      <Navbar />

      <div className='background'>
        <img className='image_1' src='image_1.png' alt='' />
        <img className='image_2' src='image_2.png' alt='' />
        <img className='image_3' src='image_3.png' alt='' />
        <img className='image_4' src='image_4.png' alt='' />
        <img className='img' src='background.png' alt='' />
      </div>

      <div className='Approach'>
        <h1 className='test'>Our Approach</h1>
        <p className='mini-test'>We want to introduce our country Vietnam to
          everyone, by creating a website that do wonders
          for everyone to choose where you want to come
          and travel carefully. Customers can also get
          information about the cities and what they have
          so that they can make their decisions.
        </p>
        <img className='image_5' src='Image_5.png' alt='' />
      </div>

      <div className='member'>
        <h1 className='text-member'>Our team member</h1>
        <div className='image-member'>
          <img className='image_6' src='image_7.png' alt='' />
          <img className='image_7' src='image_7.png' alt='' />
          <img className='image_8' src='image_7.png' alt='' />
        </div>
        <div className='member-info'>
          <div className='member_1'>
            <h2>Bùi Đình Khoa</h2>
            <h2>Member</h2>
          </div>
          <div className='leader'>
            <h2>Đỗ Quang Vinh</h2>
            <h2>Leader</h2>
          </div>
          <div className='member_2'>
            <h2>Nguyễn Lư Đức Nghĩa</h2>
            <h2>Member</h2>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
export default Aboutus