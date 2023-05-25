import React from "react";

const TurnIndicator = ({ currentPlayer }) => {
    const icon =
        currentPlayer === 1 ? <i className="fa-solid fa-x turquoise"></i> : <i className="fa-solid fa-o yellow"></i>;
    const text = currentPlayer === 1 ? "Player 1, you're next!" : "Player 2, you're next!";
    return (
        <div className="turn" data-id="turn">
            {/* <i className="fa-solid fa-x turquoise"></i> */}
            {icon}
            <p className="turquoise">{text}</p>
        </div>
    );
};

export default TurnIndicator;
