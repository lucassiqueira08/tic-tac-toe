/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-array-index-key */
import React, { useState } from "react";
import calculateWinner from "../helper";
import Board from "./Board";
import BreakEven from "./BreakEven";
import Player from "./Player";
import { BackButton, GridBackground, RestartButton, RightContainer } from "./styles";
import Winner from "./Winner";

interface Props {
  restartGame: () => void
}

const Game: React.FC<Props> = ({ restartGame }: Props)=> {
  const [history, setHistory] = useState<any>([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [duckIsNext, setDuckIsNext] = useState(true);
  const winner = calculateWinner(history[stepNumber]);
  const whoPlays = duckIsNext ? "duck" : "bear";

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = whoPlays;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setDuckIsNext(!duckIsNext);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setDuckIsNext(step % 2 === 0);
  };

  return (
    <>
      <div>
        <BackButton onClick={restartGame}>&#8249;</BackButton>
      </div>
      <GridBackground>
        <Board squares={history[stepNumber]} onClick={handleClick} />
      </GridBackground>
      <RightContainer>
        <div>
          {winner ? (
            <Winner winner={winner} />
          ) : !winner && stepNumber === 9 ? (
            <BreakEven />
          ) : (
            <Player whoPlays={whoPlays} />
          )}
        </div>
        {stepNumber > 0 ? (
          <RestartButton type="button" onClick={() => jumpTo(0)}>
            Reiniciar
          </RestartButton>
        ) : null}
      </RightContainer>
    </>
  );
};

export default Game;
