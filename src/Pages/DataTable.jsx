import { useLocation } from 'react-router-dom';
import { sortData } from '../utils/sortUtils';
import { useSortData } from '../hooks/useSortData';
import Table from '../components/Table/Table';
import SearchInput from '../components/FileInput/SearchInput';
import { useState } from 'react';

function DataTable() {
    const location = useLocation();
    const data = location.state["data"];
    const { sortColumn, sortOrder, resetSort, handleSort } = useSortData();
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (results) => {
        if (results && results.length > 0) {
            setFilteredData(results);
        }
    };

    const tableProps = {
        title: "Days Worked by Project Table",
        headers: ['Employee', 'Project', 'Date From', 'Date To'],
        includeIndex: true,
        sortable: true,
        data: filteredData,
        handleSort: handleSort,
        sortFunction: (data) => sortData(data, sortColumn, sortOrder),
        onSearch: handleSearch,
    };
    return (
        <>
            <SearchInput data={data} onSearch={handleSearch} />
            <Table {...tableProps} />
        </>
    );
}

export default DataTable;