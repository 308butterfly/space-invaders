import bezel from '../assets/Space-Invaders-Bezel.bmp';
import './screen.css';

import { TextStyle } from 'pixi.js';
import { Stage, Container, Sprite, Text } from '@pixi/react';

// screen data goes here?
export const Screen = ({ VROM }) => {
  const width = 500;
  const height = 325;

  const style = new TextStyle({ fill: 0xffffff });
  return (
    <div className="display">
      <img src={bezel} alt="SPACE INVADERS BEZEL" className="bezel" />
      <div className="monitor">
        <Stage width={width} height={height}>
          <Text text={VROM} anchor={0.5} x={150} y={150} style={style} />
        </Stage>
      </div>
    </div>
  );
};
