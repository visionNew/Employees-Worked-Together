import { useLocation } from 'react-router-dom';
import { sortData } from '../utils/sortUtils';
import { useSortData } from '../hooks/useSortData';
import Table from '../components/Table/Table';

function DataTable() {
    const location = useLocation();
    const data = location.state["data"];
    const { sortColumn, sortOrder, resetSort, handleSort } = useSortData();


    const tableProps = {
        title: "Days Worked by Project Table",
        headers: ['Employee', 'Project', 'Date From', 'Date To'],
        includeIndex: true,
        sortable: true,
        data: data,
        handleSort: handleSort,
        sortFunction: (data) => sortData(data, sortColumn, sortOrder),
    };

    return <Table {...tableProps} />;
}

export default DataTable;