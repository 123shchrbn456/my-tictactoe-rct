import React, { useState } from "react";
import "./style/Menu.css";
import { defaultGameParameters } from "../utils";

const Menu = ({ totalGameReset, startNewRound }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const onResetClickHandler = () => {
        totalGameReset(defaultGameParameters);
        localStorage.setItem("tictactoe-game", JSON.stringify(defaultGameParameters));
        setMenuOpen(false);
    };

    const onNewRoundClickHandler = () => {
        // закладка, не получается обнулить поставленные знаки
        // console.log("qqqqs");
        startNewRound();
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
