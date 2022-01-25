import styled from 'styled-components';
import DuckImg from '../../../../assets/images/tic-tac-toe/duck.png';
import BearImg from '../../../../assets/images/tic-tac-toe/bear.png';

export const DuckContainer = styled.div`
  background-color: white;
  width: 180px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const DuckImage = styled.img.attrs(() => ({
  alt: 'Duck',
  src: DuckImg,
}))`
  width: 100px;
  height: 120px;
  @media (max-width: 1400px) {
    height: 100px;
    width: 80px;
  }
`;

export const BearContainer = styled.div`
  background-color: white;
  width: 180px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BearImage = styled.img.attrs(() => ({
  alt: 'Bear',
  src: BearImg,
}))`
  width: 100px;
  height: 120px;
  @media (max-width: 1400px) {
    height: 100px;
    width: 80px;
  }
`;

export const WhoPlaysTitle = styled.span`
  font-size: 35px;
  line-height: 35px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  color: #1f163c;
`;

export const WinnerTitle = styled.span`
  font-size: 30px;
  line-height: 35px;
  font-weight: 900;
  text-align: center;
  text-transform: uppercase;
  color: #1f163c;
`;
