import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { sortData } from '../utils/sortUtils';
import { useSortData } from '../hooks/useSortData';
import * as dataManipulation from '../utils/calculateUtils';
import Table from '../components/Table/Table';
import SearchInput from '../components/FileInput/SearchInput';

function DaysWorkedByProjectTable() {
    const location = useLocation();
    const data = location.state["data"];
    const { sortColumn, sortOrder, resetSort, handleSort } = useSortData();
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (results) => {
        if (results && results.length > 0) {
            setFilteredData(results);
        }
    };

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
        data: filteredData,
        handleSort: handleSort,
        sortFunction: (data) => sortData(data, sortColumn, sortOrder),
        onSearch: handleSearch,
    };

    return (
        <>
            <SearchInput data={groupedData} onSearch={handleSearch} />
            <Table {...tableProps} />
        </>
    );
}

export default DaysWorkedByProjectTable;