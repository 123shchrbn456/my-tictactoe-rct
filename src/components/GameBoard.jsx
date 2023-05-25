import React from "react";
import SingleSquare from "./SingleSquare";

const GameBoard = ({ changeState, currentPlayer, playersMoves }) => {
    const squareIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return (
        <>
            {squareIds.map((squareId) => {
                const clickedSquare = playersMoves.find((playerMove) => playerMove.squareId === squareId);
                console.log(clickedSquare);
                return (
                    <SingleSquare
                        key={squareId}
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
