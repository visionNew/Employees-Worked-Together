import { useState } from 'react';

function SearchInput({ data, searchKey }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = () => {
        const results = data.filter(item => item[searchKey].toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} />
            <button onClick={handleSearch}>Search</button>

            <ul>
                {searchResults.map((result, index) => (
                    <li key={index}>{result[searchKey]}</li>
                ))}
            </ul>
        </div>
    );
}

export default SearchInput;