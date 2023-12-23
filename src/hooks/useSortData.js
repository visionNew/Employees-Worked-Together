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

export { useSortData }