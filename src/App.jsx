import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Main from './Pages/Main/Main';
import Statistic from './Pages/Statistic/Statistic';
import DataTable from './Pages/DataTable';
import DaysWorkedByProjectTable from './Pages/DaysWorkedByProjectTable';
import DaysWorkedTogetherTable from './Pages/DaysWorkedTogetherTable';
import './App.css'


function App() {
  
  return (
      <Routes>
            <Route path="/" element={<Main />}>
                <Route path="" element={<Home />} />
                <Route path="employees-statistic" element={<Statistic />}>
                    <Route path="overall-stats" element={<DataTable/>} />
                    <Route path="worked-project-period" element={<DaysWorkedByProjectTable />} />
                    <Route path="worked-together-period" element={<DaysWorkedTogetherTable />} />
                </Route>
            </Route>
        </Routes>
  )
}

export default App
