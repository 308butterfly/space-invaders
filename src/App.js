import './App.css';
import bezel from '../src/assets/Space-Invaders-Bezel.bmp';
import { useEffect, useState } from 'react';
import { useGameLogic } from './hooks/useGameLogic';
import { Controls } from './components/controls';
import { Screen } from './components/screen';
import { Debug } from './components/debug';

function App({ rom }) {
  const [credits, setCredits] = useState(0);
  const [screen, setScreen] = useState('Demo');
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isDebugDisplayed, setIsDebugDisplayed] = useState(true);

  const handleLeftButtonClick = () => setScreen('Left Pushed');
  const handleRightButtonClick = () => setScreen('Right Pushed');
  const handleFireButtonClick = () => setScreen('Fire!! Fire!! Fire!!');

  const handlePlayerOneClick = () => {
    setCredits(prevCredits => {
      if (prevCredits > 0) {
        setScreen('Player One Start!!!');
        setIsGameStarted(true);
        return prevCredits - 1;
      }
      return prevCredits;
    });
  };

  const handlePlayerTwoClick = () => {
    setCredits(prevCredits => {
      if (prevCredits > 1) {
        setScreen('Player Two Waits...');
        setIsGameStarted(true);
        return prevCredits - 2;
      }
      return prevCredits;
    });
  };

  const handleInsertCoinClick = () => {
    setCredits(prevCredits => {
      const newCoinCount = prevCredits + 1;
      return newCoinCount;
    });
  };

  const handleResetClick = () => {
    setCredits(0);
    setIsGameStarted(false);
    setScreen('GAME RESET');
  };

  const handleToggleDebug = () => {
    setIsDebugDisplayed(isDebugDisplayed => !isDebugDisplayed);
  };

  const gameState = useGameLogic(rom);
  return (
    <div className="App">
      <div className="machine">
        <div className="display">
          <div className="monitor">{gameState ? gameState : screen}</div>
        </div>
        <div className="controls">
          <Controls
            goLeft={handleLeftButtonClick}
            goRight={handleRightButtonClick}
            fireLaser={handleFireButtonClick}
            playerOneStart={handlePlayerOneClick}
            playerTwoStart={handlePlayerTwoClick}
            insertCoin={handleInsertCoinClick}
            credits={credits}
            isGameStarted={isGameStarted}
            reset={handleResetClick}
            toggleDebug={handleToggleDebug}
          />
          {/* CONTROLS */}
        </div>
      </div>
      {/* <div>{isDebugDisplayed && <Debug romState={'David and DiMagio'} />}</div> */}
      {isDebugDisplayed && (
        <div className="debug">
          <Debug systemState={rom} />
        </div>
      )}
    </div>
  );
}

export default App;
