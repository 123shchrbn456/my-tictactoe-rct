import React, { useEffect } from "react";
import { useState } from "react";

const SingleSquare = ({ squareId, changeState, currentPlayer, clickedSquare }) => {
    const x = <i className="fa-solid fa-x turquoise"></i>;
    const y = <i className="fa-solid fa-o yellow"></i>;

    const changeCurrentPlayer = () => {
        if (currentPlayer === 1) changeState((prevState) => ({ ...prevState, currentPlayer: 2, prevPlayer: 1 }));
        if (currentPlayer === 2) changeState((prevState) => ({ ...prevState, currentPlayer: 1, prevPlayer: 2 }));
    };

    const addPlayersMoves = () => {
        const squareObj = { squareId, currentPlayer };
        changeState((prevState) => {
            let stateCopy = structuredClone(prevState);
            stateCopy.playersMoves.push(squareObj);
            localStorage.setItem("tictactoe-game", JSON.stringify(stateCopy));
            return stateCopy;
        });
    };

    const addSinglePlayerMove = () => {
        const squareObj = { squareId, currentPlayer };
        if (currentPlayer === 1) {
            changeState((prevState) => ({
                ...prevState,
                firstPlayerMoves: [...prevState.firstPlayerMoves, squareObj],
            }));
            return;
        }
        if (currentPlayer === 2) {
            changeState((prevState) => ({
                ...prevState,
                secondPlayerMoves: [...prevState.secondPlayerMoves, squareObj],
            }));
            return;
        }
    };

    const onClickHandler = () => {
        if (clickedSquare) return;
        addSinglePlayerMove();
        changeCurrentPlayer();
        addPlayersMoves();
    };

    return (
        <div key={squareId} id={squareId} className="square shadow" onClick={onClickHandler}>
            {clickedSquare && clickedSquare.currentPlayer === 1 && x}
            {clickedSquare && clickedSquare.currentPlayer === 2 && y}
        </div>
    );
};

export default SingleSquare;
