import { handleFileUpload } from './utils/handleFailUtils'
import './App.css'
import { useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  const handleFileChange = (e) => {
    handleFileUpload(e, setData);
  };

  return (
    <>
      <div className="App">
        <h1>Employees</h1>
        <p></p>

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
