import { useState } from 'react';

function useSortData() {
    const [sortColumn, setSortColumn] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc');

    const resetSort = () => {
        setSortColumn(null);
        setSortOrder('asc');
    };

    const handleSort = (column) => {
        if (column === sortColumn) {
            setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');

            if (sortOrder === 'desc') {
                resetSort();
            }
        } else {
            setSortOrder('asc');
            setSortColumn(column);
        }
    };

    return { sortColumn, sortOrder, resetSort, handleSort };
}

function sortData(data, sortColumn, sortOrder) {
    return [...data].sort((a, b) => {
        const columnA = a[sortColumn];
        const columnB = b[sortColumn];

        if (columnA < columnB) {
            return sortOrder === 'asc' ? -1 : 1;
        }
        if (columnA > columnB) {
            return sortOrder === 'asc' ? 1 : -1;
        }
        return 0;
    });
}

export { useSortData, sortData }