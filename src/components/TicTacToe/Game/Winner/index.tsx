import React from 'react';
import {
  BearContainer, BearImage, DuckContainer, DuckImage, WinnerTitle,
} from '../Player/styles';

interface Props {
  winner: any
}

const Winner: React.FC<Props> = ({ winner }: Props) => (winner === 'duck' ? (
  <DuckContainer>
    <WinnerTitle>Vencedor:</WinnerTitle>
    <DuckImage />
  </DuckContainer>
) : (
  <BearContainer>
    <WinnerTitle>Vencedor:</WinnerTitle>
    <BearImage />
  </BearContainer>
));

export default Winner;
