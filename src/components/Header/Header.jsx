import { Link, NavLink } from 'react-router-dom';
import Logo from '../../../public/logo.svg'
import './Header.css';

function Header() {
    return (
            <header>
                <div className="container">
                    <div className="content">
                        <div className='header__logo'>
                            <Link to={"/"}><img src={Logo} alt="logo" /></Link>
                        </div>
                        <nav>
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/employees-statistic"}>Statistic</NavLink>
                        </nav>
                        <span>Statistic App</span>
                    </div>
                </div>
            </header>
    )
}

export default Header