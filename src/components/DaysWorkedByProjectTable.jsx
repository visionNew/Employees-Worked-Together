import { useLocation } from 'react-router-dom';
import { useSortData, sortData } from '../utils/sortUtils';
import * as dataManipulation from '../utils/calculateUtils';
import Table from './Table/Table';

function DaysWorkedByProjectTable() {
    const location = useLocation();
    const data = location.state["data"];
    const { sortColumn, sortOrder, resetSort, handleSort } = useSortData();

    const groupedData = data.map(row => [
        row[0],
        row[1],
        row[2], 
        row[3], 
        dataManipulation.calculateDaysWorked(row[2], row[3]),
    ]);

    const tableProps = {
        title: "Days Worked by Project Table",
        headers: ["Employee", "Project", "Date From", "Date To", "Days Worked"],
        includeIndex: true,
        sortable: true,
        data: groupedData,
        handleSort: handleSort,
        sortFunction: (data) => sortData(data, sortColumn, sortOrder),
    };

    return <Table {...tableProps} />;
}

export default DaysWorkedByProjectTable;