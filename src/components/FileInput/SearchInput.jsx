import { useEffect, useState } from "react";
import "./SearchInput.css"

function SearchInput({ data, onSearch }) {
  const [query, setQuery] = useState('');

  const search = () => {
    const results = data.filter((row) =>
      row.some((cell) => cell.toString().toLowerCase().includes(query))
    );
    onSearch(results);
  };

  useEffect(() => {
    search();
  }, []);

  return (
    <div>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value.toLowerCase());
          search();
        }}
      />
    </div>
  );
}

export default SearchInput;