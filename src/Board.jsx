import Cell from './Cell';

function Board({ squares }) {
  return (
    <div className="board" id="board">
      {squares.map((value, index) => (
        <Cell key={index} value={value} />
      ))}
    </div>
  );
}

export default Board;