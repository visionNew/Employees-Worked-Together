import './App.css'

function App() {
  function handleFileUpload(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsText(file);
    reader.onload = function () {
      const dataArr = reader.result.split("\r\n");
      const dataMatrix = dataArr
        .filter((row) => row.trim().length !== 0)
        .map((row) => row.split(","));
      const sanitizedArray = dataMatrix.map((row) => {

        return row.map((cell) => cell.trim());
      });
      return sanitizedArray;
    };
  }
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
