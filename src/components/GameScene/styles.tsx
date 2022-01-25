import styled from 'styled-components';
import GameBackground from '../../assets/images/tic-tac-toe/background.png';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center
  width: 100%;
  height: 100vh;
  background: #dee3ed;
  /* background-image: url(${GameBackground}); */
  background-position: center;
  background-repeat: repeat;
  /* background-size: 100%; */
`;
