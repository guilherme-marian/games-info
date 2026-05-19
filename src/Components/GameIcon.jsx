function GameIcon({ game, onClick }) {
  return (
    <div className="game-icon" onClick={onClick}>
      <img src={game.image} alt={game.title} />
      <h3>{game.title}</h3>
    </div>
  );
}

export default GameIcon;