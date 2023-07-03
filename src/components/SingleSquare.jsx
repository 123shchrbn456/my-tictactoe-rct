import React, { useEffect } from "react";
import { useState } from "react";

const SingleSquare = ({
    squareId,
    changeCurrentPlayer,
    addPlayersMoves,
    addSinglePlayerMove,
    currentPlayer,
    clickedSquare,
}) => {
    const x = <i className="fa-solid fa-x turquoise"></i>;
    const y = <i className="fa-solid fa-o yellow"></i>;

    const changeCurrentPlayerHandler = (currentPlayer) => {
        changeCurrentPlayer(currentPlayer);
    };

    const addPlayersMovesHandler = () => {
        const squareObj = { squareId, currentPlayer };
        addPlayersMoves(squareObj);
    };

    const addSinglePlayerMoveHandler = () => {
        const squareObj = { squareId, currentPlayer };
        addSinglePlayerMove(currentPlayer, squareObj);
    };

    const onSquareClickHandler = () => {
        if (clickedSquare) return;
        addSinglePlayerMoveHandler();
        changeCurrentPlayerHandler(currentPlayer);
        addPlayersMovesHandler();
    };

    return (
        <div key={squareId} id={squareId} className="square shadow" onClick={onSquareClickHandler}>
            {clickedSquare && clickedSquare.currentPlayer === 1 && x}
            {clickedSquare && clickedSquare.currentPlayer === 2 && y}
        </div>
    );
};

export default SingleSquare;
