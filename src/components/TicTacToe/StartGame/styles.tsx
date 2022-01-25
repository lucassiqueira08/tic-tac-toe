import styled from 'styled-components';
import TitleImage from '../../../assets/images/tic-tac-toe/title.png';

export const TitleContainer = styled.img.attrs(() => ({
  alt: 'Jogo da Velha',
  src: TitleImage,
}))`
  margin-bottom: 30px;
  max-width: 279px;
`;

export const PlayButton = styled.button`
  background: #fccb1c;
  border-radius: 25px;
  border: none;
  height: 50px;
  width: 170px;
  color: #1f163c;
  font-size: 30px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition-duration: 0.4s;
  padding: 4px;
  margin-left: 10px;
  &:hover {
    background: #d49c2c
  }
`;

export const Container = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
