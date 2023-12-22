function TableBody({ data, includeIndex, addColumns }) {
  return (
    <tbody>
      {data.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {includeIndex && <td>{rowIndex + 1}.</td>}
          {row.map((cell, cellIndex) => (
            <td key={cellIndex}>{cell}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

export default TableBody;