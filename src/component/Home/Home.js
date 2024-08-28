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
                    <Link to="/"><p className='button'>HOME</p></Link>
                    <Link to="/aboutus"><p className='button'>ABOUT US</p></Link>
                    <Link to="/search"><p className='button'>ALL TOURS</p></Link>
                    <Link to="/City"><p className='button'>TEST</p></Link>
                    <Link to="/Attraction"><p className='button'>Attraction</p></Link>
                    <div className='log_re'>
                        <Link to="/Login"><p>LOGIN</p></Link>
                        <p className='line'>&#124;</p>
                        <Link to="/Signup"><p>REGISTER</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home