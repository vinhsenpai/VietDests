import './Navbar.css'
import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <div className='Navbar'>
                <div className='logo'>
                    <span className='firstlogo'>Viet</span>
                    <span className='secondlogo'>Dests</span>
                </div>
                <div className='button_space'>
                    <Link to="/home"><p className='button'>HOME</p></Link>
                    <Link to="/aboutus"><p className='button'>ABOUT US</p></Link>
                    <Link to="/search"><p className='button'>ALL TOURS</p></Link>
                    <div className='log_re'>
                        <p>LOGIN</p>
                        <p className='line'>&#124;</p>
                        <p>REGISTER</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home