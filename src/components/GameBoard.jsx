import React from "react";
import SingleSquare from "./SingleSquare";

const GameBoard = ({
    changeState,
    changeCurrentPlayer,
    addPlayersMoves,
    addSinglePlayerMove,
    currentPlayer,
    playersMoves,
}) => {
    const squareIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            {squareIds.map((squareId) => {
                const clickedSquare = playersMoves.find((playerMove) => playerMove.squareId === squareId);
                return (
                    <SingleSquare
                        key={squareId}
                        changeCurrentPlayer={changeCurrentPlayer}
                        addPlayersMoves={addPlayersMoves}
                        addSinglePlayerMove={addSinglePlayerMove}
                        squareId={squareId}
                        changeState={changeState}
                        currentPlayer={currentPlayer}
                        clickedSquare={clickedSquare}
                    />
                );
            })}
        </>
    );
};

export default GameBoard;
