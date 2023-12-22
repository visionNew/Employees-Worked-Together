import { useLocation } from 'react-router-dom';
import { useSortData, sortData } from '../utils/sortUtils';
import SortButton from './SortButton/SortButton';

function DataTable() {
    const location = useLocation();
    const data = location.state["data"];
    const { sortColumn, sortOrder, resetSort, handleSort } = useSortData();
    const sortedData = sortData(data, sortColumn, sortOrder);
return (
        <>
        <table>
            <thead>
            <tr>
                <th>
                    <SortButton onClick={() => handleSort(0)}>Employee</SortButton>
                </th>
                <th>
                    <SortButton onClick={() => handleSort(1)}>Project</SortButton>
                </th>
                <th>
                    <SortButton onClick={() => handleSort(2)}>Date From</SortButton>
                </th>
                <th>
                    <SortButton onClick={() => handleSort(3)}>Date To</SortButton>
                </th>
            </tr>
            </thead>
            <tbody>
            {sortedData.map((row, index) => (
                <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </>
    );
}

export default DataTable;