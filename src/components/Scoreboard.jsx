import React from "react";

const Scoreboard = ({ gameStatistic }) => {
    return (
        <>
            <div className="score shadow" style={{ backgroundColor: "#3cc4bf" }}>
                <p>Player 1</p>
                <span className="p1-wins" data-id="p1-wins">
                    {gameStatistic.player1} Wins
                </span>
            </div>
            <div className="score shadow" style={{ backgroundColor: "#d3d3d3" }}>
                <p>Ties</p>
                <span className="ties" data-id="ties">
                    {gameStatistic.tie}
                </span>
            </div>
            <div className="score shadow" style={{ backgroundColor: "#f2b147" }}>
                <p>Player 2</p>
                <span className="p2-wins" data-id="p2-wins">
                    {gameStatistic.player2} Wins
                </span>
            </div>
        </>
    );
};

export default Scoreboard;
