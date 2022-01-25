import React from 'react';

import {
  GenericSquare, DuckSquare, BearSquare, DuckImage, BearImage,
} from './styles';

interface Props {
  value: string
  onClick: () => void
}

const Square: React.FC<Props> = ({ value, onClick }: Props) => {
  const isDuck = value === 'duck';
  const isBear = value === 'bear';
  const isGenericSquare = value === null;
  return (
    <>
      {isGenericSquare && (
      <GenericSquare onClick={onClick} />
      )}
      {isBear && (
      <BearSquare>
        <BearImage />
      </BearSquare>
      )}
      {isDuck && (
        <DuckSquare>
          <DuckImage />
        </DuckSquare>
      )}
    </>
  );
};

export default Square;
