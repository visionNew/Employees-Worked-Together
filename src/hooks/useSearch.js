import { useState } from 'react';

function useSearch(data) {
    const [filteredData, setFilteredData] = useState(data);

    const handleSearch = (results) => {
        if (results && results.length > 0) {
        setFilteredData(results);
        }
    };

    return { filteredData, handleSearch };
}

export default useSearch;