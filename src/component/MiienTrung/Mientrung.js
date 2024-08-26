import Navbar from "../Aboutus/Navbar.js";
import Footer from "../Aboutus/Footer.js";
import './Mientrung.css'

function Mientrung() {
    return (
        <div>
            <Navbar />
            <div className="mientrung-head-image">
                <h1>Miền Trung</h1>
                <p className="eng-text">(Central)</p>
            </div>
            <div className="mientrung-city-selection-sort">
                <h1 className="divided-area-title">---North Central Coast---</h1>
                <h1 className="divided-area-title">Bắc Trung Bộ</h1>
                <div className="divided-area">
                    <button className="button-city">Thanh Hóa</button>
                    <button className="button-city">Nghệ An</button>
                    <button className="button-city">Hà Tĩnh</button>
                    <button className="button-city">Quảng Bình</button>
                    <button className="button-city">Quảng Trị</button>
                    <button className="button-city">Thừa Thiên Huế</button>
                </div>

                <h1 className="divided-area-title">---South Central Coast---</h1>
                <h1 className="divided-area-title">Nam Trung Bộ</h1>
                <div className="divided-area">
                    <button className="button-city">Đà Nẵng</button>
                    <button className="button-city">Quảng Nam</button>
                    <button className="button-city">Quảng Ngãi</button>
                    <button className="button-city">Bình Định</button>
                    <button className="button-city">Phú Yên</button>
                    <button className="button-city">Khánh Hòa</button>
                    <button className="button-city">Ninh Thuận</button>
                    <button className="button-city">Bình Thuận</button>
                </div>

                <h1 className="divided-area-title">---Central Highlands---</h1>
                <h1 className="divided-area-title">Tây Nguyên</h1>
                <div className="divided-area">
                    <button className="button-city">Kon Tum</button>
                    <button className="button-city">Gia Lai</button>
                    <button className="button-city">Đắk Lắk</button>
                    <button className="button-city">Đắk Nông</button>
                    <button className="button-city">Lâm Đồng</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Mientrung