import { FaAngleDown, FaAngleUp, FaMinus } from 'react-icons/fa';
import "./SortButton.css"

function SortButton({ onClick, children, sortColumn, sortOrder, column }) {
  const isSorted = sortColumn === column;

  const getIcon = () => {
    if (isSorted) {
      return sortOrder === 'asc' ? <FaAngleUp /> : <FaAngleDown />;
    }
    return <FaMinus />;
  };

  return (
    <button type="button" className="sort__button" onClick={() => onClick(column)}>
      {children}
      {/* {getIcon()} */}
    </button>
  );
}

export default SortButton;