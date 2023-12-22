import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import './index.css'
import DataTable from './components/DataTable.jsx';
import DaysWorkedByProjectTable from './components/DaysWorkedByProjectTable.jsx';
import DaysWorkedTogetherTable from './components/DaysWorkedTogetherTable.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route 
                        path="/overall-stats" 
                        element={<DataTable />} 
                    />
                    <Route
                        path="/worked-project-period"
                        element={<DaysWorkedByProjectTable />}
                    />
                    <Route
                        path="/worked-together-period"
                        element={<DaysWorkedTogetherTable />}
                    />
                </Route>
            </Routes>
    </BrowserRouter>
)
