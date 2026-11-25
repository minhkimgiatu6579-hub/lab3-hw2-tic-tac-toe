function Cell({ value }) {
  const markClass = value === 'X' ? 'cell-x' : value === 'O' ? 'cell-o' : '';

  return (
    <button type="button" className={`cell ${markClass}`}>
      {value}
    </button>
  );
}

export default Cell;