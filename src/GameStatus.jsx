function GameStatus({ statusText }) {
  return (
    <p className="status" id="status">
      {statusText}
    </p>
  );
}

export default GameStatus;