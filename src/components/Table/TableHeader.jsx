import SortButton from './../SortButton/SortButton';

function TableHeader({ headers, handleSort }) {
  return (
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={index}>
            <SortButton onClick={() => handleSort(index)}>{header}</SortButton>
          </th>
        ))}
      </tr>
    </thead>
  );
}

export default TableHeader;