import { handleFileUpload } from './utils/handleFailUtils'
import './App.css'

function App() {
  
  return (
    <>
      <div className="App">
        <h1>Employees</h1>
        <p></p>

        <input type="file" onChange={handleFileUpload} />

      </div>
    </>
  )
}

export default App
