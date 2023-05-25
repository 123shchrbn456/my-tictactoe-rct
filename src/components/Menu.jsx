import React, { useState } from "react";
import "./style/Menu.css";
import { defaultGameParameters } from "../utils";

const Menu = ({ changeState }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const onResetClickHandler = () => {
        changeState(defaultGameParameters);
        localStorage.setItem("tictactoe-game", JSON.stringify(defaultGameParameters));
        setMenuOpen(false);
    };

    const onNewRoundClickHandler = () => {
        // закладка, не получается обнулить поставленные знаки
        // console.log("qqqqs");
        changeState((prevState) => ({
            ...prevState,
            firstPlayerMoves: [],
            secondPlayerMoves: [],
            playersMoves: [],
            playersMovesCount: 0,
            prevPlayer: 2,
            currentPlayer: 1,
            winner: undefined,
        }));
        setMenuOpen(false);
    };
    return (
        <div className="menu">
            <button className="menu-btn" onClick={() => setMenuOpen((prev) => !prev)}>
                Actions
                <i className="fa-solid fa-chevron-down"></i>
            </button>
            {menuOpen && (
                <div className="menu-items items border">
                    <button className="reset-btn" onClick={onResetClickHandler}>
                        Reset Completely
                    </button>
                    <button className="new-round-btn" onClick={onNewRoundClickHandler}>
                        New Round
                    </button>
                </div>
            )}
        </div>
    );
};

export default Menu;
