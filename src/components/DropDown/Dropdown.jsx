import { NavLink } from 'react-router-dom';
import './Dropdown.css';

function Dropdown({ data }) {

  return (
    <nav className="dropdown__menu">
      <NavLink to={"/employees-statistic/overall-stats"} state={{ data: data }}>
        Overall Statistic
      </NavLink>
      <NavLink to={"/employees-statistic/worked-project-period"} state={{ data: data }}>
        Project Period
      </NavLink>
      <NavLink to={"/employees-statistic/worked-together-period"} state={{ data: data }}>
        Worked Together Period
      </NavLink>
    </nav>
  );
}

export default Dropdown;