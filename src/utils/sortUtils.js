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

export { sortData }