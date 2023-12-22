import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { handleFileUpload } from './utils/handleFailUtils';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import FileInput from "./components/FileInput/FileInput";
import './App.css'


function App() {
  const [data, setData] = useState([]);
  const [errors, setErrors] = useState([]);

  const handleFileChange = (e) => {
    handleFileUpload(e, setData, setErrors);
  };

  return (
    <>
      <div className="App">
        <header className="app__header">
          {/* <div className="header__logo"><img src={Logo} alt="logo" /></div> */}
          <FileInput onChange={handleFileChange} />
          <h1>Employees Statistic</h1>
        </header>

        {!!errors.length && <ErrorDisplay errors={errors} />}

        <nav>
          <NavLink to="/">Home page</NavLink>
          <NavLink to={"/overall-stats"} state={{ data: data }}>
              Overall Stats
          </NavLink>
          <NavLink to={"/worked-project-period"} state={{ data: data }}>
              Most Points
          </NavLink>
          <NavLink to={"/worked-together-period"} state={{ data: data }}>
              Most Points All Games
          </NavLink>
        </nav>

        {!!data.length && <Outlet />}
      </div>
    </>
  )
}

export default App
