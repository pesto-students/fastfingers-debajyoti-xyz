import React, { useContext } from "react";
import PropTypes from "prop-types";

import AppContext from "../lib/AppContext";
import LiveGameContext from "../lib/LiveGameContext";
import TimerContext from "../lib/TimerContext";
import { formatScoreLowRes } from "../lib/misc";

import logoPlayer from "../asset/image/icon/material-person.svg";
import logoGamepad from "../asset/image/icon/awesome-gamepad.svg";

import "./Header.scss";

export const Header = ({ playerName, gameLevel, gameScore, hideScore }) => {
  return (
    <header className="game-header">
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
        {hideScore ? null : (
          <div className="game-score-wrapper">
            SCORE: <span className="game-score">{gameScore}</span>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  playerName: PropTypes.string.isRequired,
  gameLevel: PropTypes.string.isRequired,
  gameScore: PropTypes.string.isRequired,
};

const HeaderContainer = ({ hideScore = false }) => {
  const {
    state: { playerName, gameLevel },
  } = useContext(AppContext);
  const {
    state: { gameStartTime },
  } = useContext(LiveGameContext);
  const { lastTimestamp } = useContext(TimerContext);

  const gameScore = formatScoreLowRes(
    Math.max(lastTimestamp - gameStartTime, 0)
  );

  return (
    <Header
      playerName={playerName}
      gameLevel={gameLevel}
      gameScore={gameScore}
      hideScore={hideScore}
    />
  );
};

export default HeaderContainer;
