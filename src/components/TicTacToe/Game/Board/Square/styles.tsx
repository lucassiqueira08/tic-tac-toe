import styled from 'styled-components';

import DuckImg from '../../../../../assets/images/tic-tac-toe/duck.png';
import BearImg from '../../../../../assets/images/tic-tac-toe/bear.png';

export const GenericSquare = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  align-content: center;
  transition: all 1s ease;
  background: white;
  font-size: 0;
`;

export const DuckSquare = styled.div`
  background: white;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  align-content: center;
  transition: all 1s ease;
  width: 100%;
  height: 100%;
  display: flex;
   justify-content: center;
  align-items: center;
`;
export const DuckImage = styled.img.attrs(() => ({
  alt: 'Duck',
  src: DuckImg,
}))`
  width: 100px;
  height: 120px;    
  @media(max-width: 1400px) {
    height: 100px;
    width: 80px;
  }
`;

export const BearSquare = styled.div`
  background: white;
  border: none;
  cursor: pointer;
  outline: none;
  text-align: center;
  align-content: center;
  transition: all 1s ease;
  width: 100%;
  height: 100%;
  display: flex;
   justify-content: center;
  align-items: center;
`;

export const BearImage = styled.img.attrs(() => ({
  alt: 'Duck',
  src: BearImg,
}))`
  width: 100px;
  height: 120px;
  @media(max-width: 1400px) {
    height: 100px;
    width: 80px;
  };
`;
