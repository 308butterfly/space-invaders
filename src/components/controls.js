import './controls.css';

export const Controls = ({
  goLeft,
  goRight,
  fireLaser,
  playerOneStart,
  playerTwoStart,
  insertCoin,
  credits,
  isGameStarted,
  reset,
  toggleDebug,
}) => (
  <div>
    <div>
      <button type="button" onClick={goLeft} disabled={!isGameStarted}>
        Left
      </button>
      <button type="button" onClick={goRight} disabled={!isGameStarted}>
        Right
      </button>
      <button type="button" onClick={fireLaser} disabled={!isGameStarted}>
        Fire
      </button>
    </div>
    <div>
      <button type="button" onClick={playerOneStart} disabled={credits === 0}>
        Player 1
      </button>
      <button type="button" onClick={playerTwoStart} disabled={credits <= 1}>
        Player 2
      </button>
    </div>
    <div>
      <button type="button" onClick={insertCoin}>
        Insert Coin
      </button>
      <button type="button" onClick={insertCoin}>
        Insert Coin
      </button>
    </div>
    <div>
      <button type="button" onClick={reset}>
        RESET
      </button>
      <button type="button" onClick={toggleDebug}>
        TOGGLE DEBUG
      </button>
    </div>
  </div>
);
