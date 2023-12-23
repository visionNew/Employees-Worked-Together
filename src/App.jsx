import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { handleFileUpload } from './utils/handleFailUtils';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import FileInput from "./components/FileInput/FileInput";
import './App.css'
import SearchInput from './components/SearshInput';


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
          <SearchInput data={data} searchKey={0}/>
        <nav>
          <NavLink to="/">Home page</NavLink>
          <NavLink to={"/overall-stats"} state={{ data: data }}>
              General Stats
          </NavLink>
          <NavLink to={"/worked-project-period"} state={{ data: data }}>
              Project Period
          </NavLink>
          <NavLink to={"/worked-together-period"} state={{ data: data }}>
              Worked Together Period
          </NavLink>
        </nav>

        {!!data.length && <Outlet />}
      </div>
    </>
  )
}

export default App
