import { useState } from 'react';
import { handleFileUpload } from './utils/handleFailUtils';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
import DataTable from "./components/DataTable";
import FileInput from "./components/FileInput/FileInput";
import DaysWorkedTogetherTable from './components/DaysWorkedTogetherTable';
import DaysWorkedByProjectTable from './components/DaysWorkedByProjectTable';
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
        <h1>Employees</h1>
        <p></p>
        <FileInput onChange={handleFileChange} />
        {!!errors.length && <ErrorDisplay errors={errors} />}
        {!!data.length && (
          <>
            <DataTable data={data} />
            <DaysWorkedByProjectTable data={data} />
            <DaysWorkedTogetherTable data={data} />
          </>
        )}
      </div>
    </>
  )
}

export default App
