import Navbar from "../Aboutus/Navbar.js";
import Footer from "../Aboutus/Footer.js";
import './Miennam.css'
import {Link} from 'react-router-dom';

function Miennam() {
    return (
        <div>
            <Navbar />
            <div className="miennam-head-image">
                <h1>Miền Nam</h1>
                <p className="eng-text">(South)</p>
            </div>
            <div className="miennam-city-selection-sort">
                <h1 className="divided-area-title">---Southeast region of Vietnam---</h1>
                <h1 className="divided-area-title">Đông Nam Bộ</h1>
                <div className="divided-area">
                    <Link to=""><button className="button-city">Hồ Chí Minh</button></Link>
                    <button className="button-city">Bà Rịa - Vũng Tàu</button>
                    <button className="button-city">Bình Dương</button>
                    <button className="button-city">Bình Phước</button>
                    <button className="button-city">Đồng Nai</button>
                    <button className="button-city">Tây Ninh</button>
                </div>

                <h1 className="divided-area-title">---Mekong Delta---</h1>
                <h1 className="divided-area-title">Đồng Bằng Sông Cửu Long</h1>
                <div className="divided-area">
                    <button className="button-city">Cần Thơ</button>
                    <button className="button-city">An Giang</button>
                    <button className="button-city">Bạc Liêu</button>
                    <button className="button-city">Bến Tre</button>
                    <button className="button-city">Cà Mau</button>
                    <button className="button-city">Đồng Tháp</button>
                    <button className="button-city">Hậu Giang</button>
                    <button className="button-city">Kiên Giang</button>
                    <button className="button-city">Long An</button>
                    <button className="button-city">Sóc Trăng</button>
                    <button className="button-city">Tiền Giang</button>
                    <button className="button-city">Trà Vinh</button>
                    <button className="button-city">Vĩnh Long</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Miennam