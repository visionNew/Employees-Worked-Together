import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import "./Table.css"

function Table({ title, subtitle, headers, data, sortable, includeIndex, sortFunction, handleSort, addColumns}) {
  const sortedData = sortable && sortFunction ? sortFunction(data) : data;
  
  return (
    <>
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}

      <div className="card">
        <table>
          <TableHeader headers={headers} handleSort={handleSort} addColumns={addColumns}/>
          <TableBody data={sortedData} includeIndex={false} addColumns={addColumns}/>
        </table>
      </div>
    </>
  );
}

export default Table;