import { NavLink } from 'react-router-dom';
import { FaInfoCircle, FaChartLine, FaChartBar, FaPeopleCarry, FaProjectDiagram, FaBars, FaFilter } from 'react-icons/fa';
import useDropDown from '../../hooks/useDropDown';
import './Dropdown.css';

function Dropdown({ data, isStatisticComponent, isHeaderComponent, handleFilterClick, }) {
  const { isDropdownOpen, toggleDropdown, dropdownRef } = useDropDown(handleFilterClick);

  return (
    <div ref={dropdownRef} className="dropdown">
      <button className="dropdown__toggle" onClick={toggleDropdown}>
        {isStatisticComponent && <><FaFilter />Filter</>}
        {isHeaderComponent && <FaBars className='burger__icon' />}
      </button>
      {isDropdownOpen &&
        <nav className="dropdown__menu">
          {isStatisticComponent && (
            <>
              <NavLink to={"/employees-statistic/overall-stats"} state={{ data: data }}>
                <FaChartLine /> Overall Statistic
              </NavLink>
              <NavLink to={"/employees-statistic/worked-project-period"} state={{ data: data }}>
                <FaProjectDiagram/> Project Period
              </NavLink>
              <NavLink to={"/employees-statistic/worked-together-period"} state={{ data: data }}>
                <FaPeopleCarry /> Worked Together Period
              </NavLink>
            </>
          )}
          {isHeaderComponent && (
            <>
              <NavLink to={"/"}><FaInfoCircle />Home</NavLink>
              <NavLink to={"/employees-statistic"}><FaChartBar />Statistic</NavLink>
            </>
          )}
        </nav>
      }
    </div>
  );
}

export default Dropdown;