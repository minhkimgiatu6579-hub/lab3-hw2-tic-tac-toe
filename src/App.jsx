import './App.css';
import Board from './Board';
import GameStatus from './GameStatus';

const sampleBoard = [
  'X', null, 'O',
  null, 'O', null,
  'X', 'X', 'O'
];

function App() {
  return (
    <main className="game">
      <h1>
        Tic<span>-</span>Tac<span>-</span>Toe
      </h1>

      <div className="scoreboard">
        <div className="score score-x" id="scoreX">
          <span className="label">Player X</span>
          <span className="value">3</span>
        </div>
        <div className="score score-draw" id="scoreDraw">
          <span className="label">Draws</span>
          <span className="value">1</span>
        </div>
        <div className="score score-o" id="scoreO">
          <span className="label">Player O</span>
          <span className="value">2</span>
        </div>
      </div>

      <GameStatus statusText="Player X's turn" />
      <Board squares={sampleBoard} />

      <button type="button" className="restart-btn" id="restartBtn">
        New Round
      </button>
    </main>
  );
}

export default App;