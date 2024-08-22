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


function Footer() {
    return (
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
    )
}
export default Footer