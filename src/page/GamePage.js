import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import logoPlayer from "../asset/image/icon/material-person.svg";
import logoGamepad from "../asset/image/icon/awesome-gamepad.svg";
import logoCross from "../asset/image/icon/metro-cross.svg";

import TimerCircle from "../component/TimerCircle";
import WordDisplay from "../component/WordDisplay";
import Input from "../component/Input";

const GamePage = ({navigate}) => {
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
            <span>PLAYER_NAME_777</span>
          </div>
          <div className="game-level">
            <img src={logoGamepad} alt="" />
            <span>LEVEL: MEDIUM</span>
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
          <div className="score-board">
            <h3>Score board</h3>
            <ul className="score-list">
              <li>
                <span className="game-name">Game 1</span>
                <span className="game-score">1:14</span>
              </li>
              <li>
                <span className="game-name">Game 2</span>
                <span className="game-score">1:27</span>
              </li>
              <li>
                <span className="game-name">Game 3</span>
                <span className="game-score">2:01</span>
                <strong className="is-personal-best">personal best</strong>
              </li>
              <li>
                <span className="game-name">Game 4</span>
                <span className="game-score">100:07</span>
              </li>
            </ul>
          </div>
          <button className="btn btn-md stop-btn">
            <img src={logoCross} alt="" />
            stop game
          </button>
        </aside>
        <div className="game-board">
          <TimerCircle timeMs={remaningTime} totalTimeMs={totalTimeMs} />
          <WordDisplay typedInput="winsew" word="window" />
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
