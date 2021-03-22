import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";

import logoPlayer from "../asset/image/icon/material-person.svg";
import logoGamepad from "../asset/image/icon/awesome-gamepad.svg";
import logoCross from "../asset/image/icon/metro-cross.svg";

import TimerCircle from "../component/TimerCircle";
import WordDisplay from "../component/WordDisplay";
import Input from "../component/Input";
import AppContext from "../lib/AppContext";
import ScoreBoard from "../component/ScoreBoard";

const GamePage = ({ navigate }) => {
  const {
    state: { playerName, gameLevel, scoreList, bestScoreIndex },
    dispatch,
  } = useContext(AppContext);

  const totalTimeMs = 30000;
  const [remaningTime, setRemaningTime] = useState(totalTimeMs);

  useEffect(() => {
    let timerInterval = null;
    const countDown = () => {
      setRemaningTime((value) => {
        if (value <= 0) {
          timerInterval && clearInterval(timerInterval);
        }
        return Math.max(0, value - 100);
      });
    };
    timerInterval = setInterval(countDown, 100);
    return () => timerInterval && clearInterval(timerInterval);
  }, []);

  return (
    <div className="game-page">
      <header>
        <div className="game-info-left">
          <div className="player-name">
            <img src={logoPlayer} alt="" />
            <span>{playerName}</span>
          </div>
          <div className="game-level">
            <img src={logoGamepad} alt="" />
            <span>LEVEL: {gameLevel.toUpperCase()}</span>
          </div>
        </div>
        <div className="game-info-right">
          <div className="game-name">fast fingers</div>
          <div className="game-score-wrapper">
            SCORE: <span className="game-score">00:30</span>
          </div>
        </div>
      </header>
      <section className="game-and-score">
        <aside>
          <ScoreBoard
            scoreList={scoreList}
            personalBestIndex={bestScoreIndex}
          />
          <button className="btn btn-md stop-btn">
            <img src={logoCross} alt="" />
            stop game
          </button>
        </aside>
        <div className="game-board">
          <TimerCircle timeMs={remaningTime} totalTimeMs={totalTimeMs} />
          <WordDisplay typedInput="winse" word="window" />
          <Input name="word-input" onChange={console.log} />
        </div>
        <footer></footer>
      </section>
    </div>
  );
};
GamePage.propTypes = {
  navigate: PropTypes.func.isRequired,
};

export default GamePage;
