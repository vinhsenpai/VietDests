import React from 'react';
import './Approach.css'
import Image_5 from './image/image_5.png'
import img1 from './image/background.png'
import './Background.css'
import Image_1 from './image/image_1.png'
import Image_2 from './image/image_2.png'
import Image_3 from './image/image_3.png'
import Image_4 from './image/image_4.png'
import './Footer.css'
import facebook from './image/facebook.png'
import insta from './image/insta.png'
import tiktok from './image/tiktok.png'
import alipay from './image/AlipayHK.png'
import gcash from './image/GCash-Logo.png'
import applepay from './image/applepay.png'
import samsungpay from './image/samsungpay.png'
import wechatpay from './image/wechatpay.png'
import american from './image/americanexpress.png'
import visa from './image/visa.png'
import mastercard from './image/mastercard.png'
import paypal from './image/paypal.png'
import googlepay from './image/googlepay.png'
import './Member.css'
import Image_7 from './image/image_7.png'
import './Navbar.css'
import { Link } from "react-router-dom";



function Aboutus() {
  return (
    <div>
      <div className='Navbar'>
                <div className='logo'>
                    <span className='firstlogo'>Viet</span>
                    <span className='secondlogo'>Dests</span>
                </div>
                <div className='button_space'>
                    <Link to="/"><p className='button'>HOME</p></Link>
                    <Link to="/aboutus"><p className='button'>ABOUT US</p></Link>
                    <Link to="/search"><p className='button'>ALL TOURS</p></Link>
                    <div className='log_re'>
                        <p>LOGIN</p>
                        <p className='line'>&#124;</p>
                        <p>REGISTER</p>
                    </div>
                </div>
            </div>

      <div className='background'>
        <img className='image_1' src={Image_1} alt='' />
        <img className='image_2' src={Image_2} alt='' />
        <img className='image_3' src={Image_3} alt='' />
        <img className='image_4' src={Image_4} alt='' />
        <img className='img' src={img1} alt='' />
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
        <img className='image_5' src={Image_5} alt='' />
      </div>

      <div className='member'>
        <h1 className='text-member'>Our team member</h1>
        <div className='image-member'>
          <img className='image_6' src={Image_7} alt='' />
          <img className='image_7' src={Image_7} alt='' />
          <img className='image_8' src={Image_7} alt='' />
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

      <div className='footer'>
            <div className='contact'>
                <h2>Contact us</h2>
                <p>Hotline: 0909 - 4567 - 89</p>
                <p>Social media:</p>
                <div className='icon'>
                    <img className='icon-img' src={facebook} alt='' />
                    <img className='icon-img' src={insta} alt='' />
                    <img className='icon-img' src={tiktok} alt='' />
                </div>
            </div>
            <div className='about'>
                <h2>About</h2>
                <p>About us</p>
            </div>
            <div className='payment'>
                <h2 className='patment-text'>Payment methods</h2>
                <div className='payment-space'>
                    <img className='icon-payment' src={alipay} alt='' />
                    <img className='icon-payment' src={american} alt='' />
                    <img className='icon-payment' src={googlepay} alt='' />
                    <img className='icon-payment' src={samsungpay} alt='' />
                    <img className='icon-payment' src={wechatpay} alt='' />
                    <img className='icon-payment' src={applepay} alt='' />
                    <img className='icon-payment' src={mastercard} alt='' />
                    <img className='icon-payment' src={visa} alt='' />
                    <img className='icon-payment' src={paypal} alt='' />
                    <img className='icon-payment' src={gcash} alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}
export default Aboutus