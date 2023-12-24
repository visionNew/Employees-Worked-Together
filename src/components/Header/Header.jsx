import { Link, NavLink } from 'react-router-dom';
import { FaInfoCircle , FaChartBar } from "react-icons/fa";
import DecoratedText from '../DecoratedText/DecoratedText';
import Dropdown from '../DropDown/Dropdown';
import Logo from '../../assets/logo.svg';
import './Header.css';

function Header() {

    return (
            <header>
                <div className="container">
                    <div className="content">
                        <div className='header__logo'>
                            <Link to={"/"}><img src={Logo} alt="logo" /></Link>
                        </div>
                        <nav className='header__nav'>
                            <NavLink to={"/"}><FaInfoCircle /> Home</NavLink>
                            <NavLink to={"/employees-statistic"}><FaChartBar /> Statistic</NavLink>
                        </nav>
                        <DecoratedText />
                        <Dropdown isHeaderComponent={true} />
                    </div>
                </div>
            </header>
    )
}

export default Header