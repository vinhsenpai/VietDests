import Navbar from "../Aboutus/Navbar.js";
import Footer from "../Aboutus/Footer.js";
import './Mienbac.css'

function Mienbac() {
    return (
        <div>
            <Navbar />
            <div className="mienbac-head-image">
                <h1>Miền Bắc</h1>
                <p className="eng-text">(North)</p>
            </div>
            <div className="mienbac-city-selection-sort">
                <div className="divided-area-title">
                    <h1 className="divided-area-title">---Northeast region of Vietnam---</h1>
                    <h1 className="divided-area-title">Đông Bắc Bộ</h1>
                </div>
                <div className="divided-area">
                    <button className="button-city">Hà Giang</button>
                    <button className="button-city">Cao Bằng</button>
                    <button className="button-city">Lạng Sơn</button>
                    <button className="button-city">Bắc Kạn</button>
                    <button className="button-city">Thái Nguyên</button>
                    <button className="button-city">Tuyên Quang</button>
                    <button className="button-city">Phú Thọ</button>
                    <button className="button-city">Bắc Giang</button>
                    <button className="button-city">Quảng Ninh</button>
                </div>

                <h1 className="divided-area-title">---Northwest region of Vietnam---</h1>
                <h1 className="divided-area-title">Tây Bắc Bộ</h1>
                <div className="divided-area">
                    <button className="button-city">Điện Biên</button>
                    <button className="button-city">Lai Châu</button>
                    <button className="button-city">Sơn La</button>
                    <button className="button-city">Hòa Bình</button>
                </div>

                <h1 className="divided-area-title">---Red River Delta---</h1>
                <h1 className="divided-area-title">Đồng Bằng Sông Hồng</h1>
                <div className="divided-area">
                    <button className="button-city">Hà Nội</button>
                    <button className="button-city">Hải Phòng</button>
                    <button className="button-city">Hưng Yên</button>
                    <button className="button-city">Hà Nam</button>
                    <button className="button-city">Thái Bình</button>
                    <button className="button-city">Nam Định</button>
                    <button className="button-city">Ninh Bình</button>
                    <button className="button-city">Vĩnh Phúc</button>
                    <button className="button-city">Bắc Ninh</button>
                    <button className="button-city">Hải Dương</button>
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default Mienbac