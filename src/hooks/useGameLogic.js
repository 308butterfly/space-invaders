import { useState, useEffect } from 'react';

export const useGameLogic = rom => {
  const [gameState, setGameState] = useState(null);

  const [index, setIndex] = useState(0);
  const [registers, setRegisters] = useState({
    A: new Uint8Array(0),
    B: new Uint8Array(0),
    C: new Uint8Array(0),
    D: new Uint8Array(0),
    E: new Uint8Array(0),
    Flags: new Uint8Array(0),
    SP: new Uint16Array(0),
    PC: new Uint16Array(0),
  });

  const [stack, setStack] = useState(new Uint8Array(0));

  useEffect(() => {
    if (index < rom.length) {
      const timeoutId = setTimeout(() => {
        setGameState(rom[index]);
        setIndex(PC => index + 1);
      }, 1000 / 60); // for a 60 Hz game loop, for example

      return () => clearTimeout(timeoutId);
    }
  }, [index, rom]);

  return gameState;
};
