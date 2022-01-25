import styled from 'styled-components';
import StartGameImage from '../../../../assets/images/tic-tac-toe/start-game-image.png';

export default styled.img.attrs(() => ({
  alt: 'Start Game Image',
  src: StartGameImage,
}))`
  max-width: 100%;
`;

export const Container = styled.div`
  width: 60%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 100px;
`;
