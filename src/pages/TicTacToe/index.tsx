import React, { useState } from 'react';

import Game from '../../components/TicTacToe/Game';
import StartGame from '../../components/TicTacToe/StartGame';

import GameScene from '../../components/GameScene';

const TicTacToe: React.FC = () => {
  const [gameStarted, setGameStarted] = useState<boolean>(false);

  const startScreen = <StartGame startGame={() => setGameStarted(true)} />;
  const gameScreen = <Game restartGame={() => setGameStarted(false)}/>;

  return (
    <GameScene
      startScreen={startScreen}
      gameScreen={gameScreen}
      gameStarted={gameStarted}
    />
  );
};

export default TicTacToe;
