import './Footer.css'
import {Link} from 'react-router-dom'
 
function Footer() {
    return (
        <div className='footer'>
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
                <Link className='no-underline' to="/aboutus"><p>About us</p></Link>
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
        </div>
    )
}
export default Footer