import './Navbar.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='logo'>
                <span className='firstlogo'>Viet</span>
                <span className='secondlogo'>Dests</span>
            </div>
            <div className='button_space'>
                <Link to="/home"><p className='button'>HOME</p></Link>
                <Link to="/"><p className='button'>ABOUT US</p></Link>
                <Link to="/alltours"><p className='button'>ALL TOURS</p></Link>
                <div className='log_re'>
                    <Link to="/lo"><p>LOGIN</p></Link>
                    <p className='line'>&#124;</p>
                    <Link to="/register"><p>REGISTER</p></Link>
                </div>
            </div>

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Aboutus />}>
                        <Route index element={<Aboutus />} />
                        <Route path="home" element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="alltours" element={<Alltours/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>


    );
}
export default Navbar