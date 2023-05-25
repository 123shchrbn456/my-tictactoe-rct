import { useEffect, useState } from "react";
import "./App.css";
import Menu from "./components/Menu";
import Modal from "./components/Modal";
import GameBoard from "./components/GameBoard";
import TurnIndicator from "./components/TurnIndicator";
import Scoreboard from "./components/Scoreboard";

import { defaultGameParameters } from "./utils";

function App() {
    const [state, setState] = useState(JSON.parse(localStorage.getItem("tictactoe-game")) || defaultGameParameters);

    // Загрузка сайта
    useEffect(() => {
        let currentGame = JSON.parse(localStorage.getItem("tictactoe-game"));
        if (!currentGame) currentGame = localStorage.setItem("tictactoe-game", JSON.stringify(defaultGameParameters));
    }, []);

    useEffect(() => {
        if (state.winner === undefined) {
            if (state.firstPlayerMoves.length >= 3 || state.secondPlayerMoves.length >= 3) {
                // Шаг 1
                addWinner();
            }
        }
    }, [state.firstPlayerMoves, state.secondPlayerMoves]);

    useEffect(() => {
        // Шаг 2
        updateStatistics();
    }, [state.winner]);

    const updateStatistics = () => {
        if (state.winner === "First player has won") {
            let stateCopy = structuredClone(state);
            stateCopy.gameStatistic.player1++;
            setState(stateCopy);
            localStorage.setItem("tictactoe-game", JSON.stringify(stateCopy));
            return;
        }
        if (state.winner === "Second player has won") {
            let stateCopy = structuredClone(state);
            stateCopy.gameStatistic.player2++;
            setState(stateCopy);
            localStorage.setItem("tictactoe-game", JSON.stringify(stateCopy));
            return;
        }
        if (state.winner === "It's Tie!") {
            let stateCopy = structuredClone(state);
            stateCopy.gameStatistic.tie++;
            setState(stateCopy);
            localStorage.setItem("tictactoe-game", JSON.stringify(stateCopy));
            return;
        }
    };

    const addWinner = () => {
        const winningPatterns = [
            [1, 2, 3],
            [1, 5, 9],
            [1, 4, 7],
            [2, 5, 8],
            [3, 5, 7],
            [3, 6, 9],
            [4, 5, 6],
            [7, 8, 9],
        ];
        if (state.prevPlayer === 1) {
            const playerHasWonGame = winningPatterns.some((winningPattern) => {
                return winningPattern.every((winningPatternNumber) =>
                    state.firstPlayerMoves.find(
                        (firstPlayerMove) => Number(firstPlayerMove.squareId) === Number(winningPatternNumber)
                    )
                );
            });
            if (playerHasWonGame) {
                setState((prevState) => ({ ...prevState, winner: "First player has won" }));
                return;
            }
        }
        if (state.prevPlayer === 2) {
            const playerHasWonGame = winningPatterns.some((winningPattern) => {
                return winningPattern.every((winningPatternNumber) =>
                    state.secondPlayerMoves.find(
                        (secondPlayerMove) => Number(secondPlayerMove.squareId) === Number(winningPatternNumber)
                    )
                );
            });
            if (playerHasWonGame) {
                setState({ ...state, winner: "Second player has won" });
                return;
            }
        }
        if (state.playersMoves.length === 9) {
            setState({ ...state, winner: "It's Tie!" });
            return;
        }
    };

    return (
        <>
            <main>
                <div className="grid" data-id="grid">
                    {/* <!-- Turn indicator --> */}
                    <TurnIndicator currentPlayer={state.currentPlayer} />

                    {/* <!-- Dropdown menu --> */}
                    <Menu changeState={setState} />

                    {/* <!-- Game board --> */}
                    <GameBoard
                        changeState={setState}
                        currentPlayer={state.currentPlayer}
                        playersMoves={state.playersMoves}
                    />

                    {/* <!-- Scoreboard --> */}
                    <Scoreboard gameStatistic={state.gameStatistic} />
                </div>
            </main>
            {state.winner && <Modal changeState={setState} winner={state.winner} />}
        </>
    );
}

export default App;
