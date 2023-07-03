import React from "react";
import "./style/Modal.css";

const Modal = ({ getToTheNextRoundModalHandler, winner }) => {
    //
    const onClickHandler = () => {
        getToTheNextRoundModalHandler();
        // добавить в localStorage
        let currentGame = JSON.parse(localStorage.getItem("tictactoe-game"));
        localStorage.setItem(
            "tictactoe-game",
            JSON.stringify({
                ...currentGame,
                firstPlayerMoves: [],
                secondPlayerMoves: [],
                playersMoves: [],
                playersMovesCount: 0,
                prevPlayer: 2,
                currentPlayer: 1,
                winner: undefined,
            })
        );
    };

    return (
        <div className="modal " data-id="modal">
            <div className="modal-contents">
                <p className="modal-text">{winner}</p>
                <button className="modal-btn" onClick={onClickHandler}>
                    Play again
                </button>
            </div>
        </div>
    );
};

export default Modal;
