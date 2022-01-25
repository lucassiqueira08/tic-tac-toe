import React from "react";

import { Container } from "./styles";

interface Props {
  startScreen: React.ReactElement;
  gameScreen: React.ReactElement;
  gameStarted: boolean;
}

const GameScene: React.FC<Props> = ({
  startScreen,
  gameScreen,
  gameStarted,
}) => {
  return (
    <Container>
      {gameStarted ? gameScreen : startScreen}
    </Container>
  );
};

export default GameScene;
