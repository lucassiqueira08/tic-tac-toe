import styled from "styled-components";
import gridBackground from "../../../assets/images/tic-tac-toe/grid-background.png";

export const GridBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-image: url(${gridBackground});
    background-repeat: no-repeat;
    background-position: center; */
  max-width: 700px;
  width: 100%;
`;

export const RestartButton = styled.button`
  background: #e2ded0;
  border-radius: 25px;
  border: none;
  height: 40px;
  width: 100px;
  color: #1f163c;
  font-size: 15px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition-duration: 0.4s;
  padding: 4px;
  margin-left: 10px;
  margin-top: 10px;
  &:hover {
    background: #b1b1b1;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const BackButton = styled.button`
  margin-top: 10px;
  background: none;
  border-radius: 50%;
  border: none;
  height: 50px;
  width: 50px;
  color: #1f163c;
  font-size: 35px;
  font-weight: 900;
  text-transform: uppercase;
  cursor: pointer;
  transition-duration: 0.4s;
  padding: 4px;
  margin-left: 10px;
  &:hover {
    background: #b1b1b1
  }
`;