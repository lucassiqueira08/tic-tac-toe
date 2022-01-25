/* eslint-disable react/no-array-index-key */
import React from 'react';
import Square from './Square';
import BoardContainer from './styles';

interface Props {
  squares: []
  onClick: (handleSquare: number) => void
}
const Board: React.FC <Props> = ({ squares, onClick }: Props) => (

  <BoardContainer>
    {squares.map((square, i) => (
      <Square key={i} value={square} onClick={() => onClick(i)} />
    ))}
  </BoardContainer>

);

export default Board;
