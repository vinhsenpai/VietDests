import './Navbar.css'
import { Link } from "react-router-dom";
import './Searchbar.css'

function Searchpage() {
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

            <div className='Searchbar'>
                <div className='search-space'>
                    <p className='title-link'>Home > All Tours</p>
                    <div className='search-button'>
                        <button className='des-search'><p className='text-button-1'>Destinations</p></button>
                        <button className='key-search'><p className='text-button-2'>Keywords (Optional)</p></button>
                        <button className='button-search'><img className='img-button' src='search.png' alt=''/></button>
                    </div>
                </div>
            </div>

            <div className='body-space'>
                <div className='tick-space'>
                    <p className='type-text'>Type</p>
                    <div className='tick-box'>
                        <button className='tick-button-1'></button>
                        <p className='tick-text'>All</p>
                    </div>
                    <div className='tick-box'>
                        <button className='tick-button'></button>
                        <p className='tick-text'>Tours</p>
                    </div>
                    <div className='tick-box'>
                        <button className='tick-button'></button>
                        <p className='tick-text'>Attractions</p>
                    </div>
                </div>

                <div className='select-space'>
                    <div className='sort-selection'>
                        <h2 className='sort-text'>Top Rated</h2>
                        <h2 className='line-sort'>&#124;</h2>
                        <h2 className='sort-text'>Most Reviews</h2>
                        <h2 className='line-sort'>&#124;</h2>
                        <h2 className='sort-text'>Lowest Price</h2>
                        <h2 className='line-sort'>&#124;</h2>
                        <h2 className='sort-text'>Highest Price</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Searchpage