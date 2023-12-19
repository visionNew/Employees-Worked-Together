import { useState } from 'react';
import { handleFileUpload } from './utils/handleFailUtils';
import ErrorDisplay from './components/ErrorDisplay/ErrorDisplay';
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
        {!!errors.length && <ErrorDisplay errors={errors} />}
        <input type="file" onChange={handleFileChange} />
        {data.map((row, rowIndex) => (
          <div key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <span key={cellIndex}>{cell} </span>
            ))}
          </div>
        ))}
      </div>
    </>
  )
}

export default App
