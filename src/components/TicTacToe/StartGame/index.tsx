import React from 'react';
import StartGameContainer from './StartGameContainer';

import { Container, TitleContainer, PlayButton } from './styles';

interface Props {
  startGame: () => void
}

const StartGame: React.FC<Props> = ({ startGame }: Props) => (
  <>
    <StartGameContainer />
    <Container>
      <TitleContainer />
      <PlayButton onClick={startGame}>Jogar</PlayButton>
    </Container>
  </>

);

export default StartGame;
