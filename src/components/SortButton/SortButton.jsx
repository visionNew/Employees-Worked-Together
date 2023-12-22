function SortButton({ onClick, children }) {
    return (
      <button type="button" onClick={onClick}>
        {children}
      </button>
    );
  }
  
  export default SortButton;