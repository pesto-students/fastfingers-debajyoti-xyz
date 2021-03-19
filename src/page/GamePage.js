import React from "react";

import logoPlayer from "../asset/image/icon/material-person.svg";
import logoGamepag from "../asset/image/icon/awesome-gamepad.svg";
import logoCross from "../asset/image/icon/metro-cross.svg";
import TimerCircle from "../component/TimerCircle";

export const GamePage = () => {
  return (
    <div className="game-page">
      <header>
        <div className="game-info-left">
          <div className="player-name">
            <img src={logoPlayer} alt="" />
            <span>PLAYER_NAME_777</span>
          </div>
          <div className="game-level">
            <img src={logoPlayer} alt="" />
            <span>LEVEL: MEDIUM</span>
          </div>
        </div>
        <div className="game-info-right">
          <div className="game-name">fast fingers</div>
          <div className="game-score">
            SCORE: <span>00:30</span>
          </div>
        </div>
      </header>
      <section className="game-and-score">
        <aside className="score-board">
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
              <span className="game-score">2:07</span>
            </li>
          </ul>
        </aside>
        <div className="game-board">
          <TimerCircle timeMs={171000} totalTimeMs={200000} />
        </div>
      </section>
    </div>
  );
};
