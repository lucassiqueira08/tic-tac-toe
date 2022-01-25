import React from 'react';

import {
  DuckContainer, BearContainer, DuckImage, BearImage, WhoPlaysTitle,
} from './styles';

interface Props {
  whoPlays: string
}

const Player: React.FC<Props> = ({ whoPlays }: Props) => (whoPlays === 'duck' ? (
  <DuckContainer>
    <WhoPlaysTitle>Quem joga:</WhoPlaysTitle>
    <DuckImage />
  </DuckContainer>
) : (
  <BearContainer>
    <WhoPlaysTitle>Quem joga:</WhoPlaysTitle>
    <BearImage />
  </BearContainer>
));

export default Player;
