import { FaSortAmountDownAlt, FaSortAmountDown, FaMinus } from 'react-icons/fa';
import { useState } from 'react';

import "./SortButton.css";

function SortButton({ onClick, children, sortColumn, sortOrder, column }) {
  const isSorted = sortColumn === column;
  const [clicked, setClicked] = useState(false);

  const getIcon = () => {
    if (isSorted) {
      return sortOrder === 'asc' ? <FaSortAmountDown /> : <FaSortAmountDownAlt />;
    }
    return <FaMinus />;
  };

  const handleClick = () => {
    setClicked(!clicked);
    onClick(column);
  };

  return (
    <button type="button" className="sort__button" onClick={handleClick}>
      {children}
      {clicked ? getIcon() : <FaSortAmountDown />}
    </button>
  );
}

export default SortButton;