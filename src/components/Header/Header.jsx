import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
import DecoratedText from '../DecoratedText/DecoratedText';
import { FaBars, FaInfoCircle , FaChartBar } from "react-icons/fa";
import './Header.css';
import { useState } from 'react';

function Header() {
    const [isMenuVisible, setMenuVisibility] = useState(false);

    const toggleMenu = () => {
        setMenuVisibility((prev) => !prev);
    };


    return (
            <header>
                <div className="container">
                    <div className="content">
                        <div className='header__logo'>
                            <Link to={"/"}><img src={Logo} alt="logo" /></Link>
                        </div>
                        <nav className={`header__nav ${isMenuVisible ? 'visible' : ''}`}>
                            <NavLink to={"/"}><FaInfoCircle /> Home</NavLink>
                            <NavLink to={"/employees-statistic"}><FaChartBar /> Statistic</NavLink>
                        </nav>
                        <DecoratedText />
                        <div className={`menu__icon ${isMenuVisible ? 'open' : ''}`} onClick={toggleMenu}>
                            <FaBars />
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header