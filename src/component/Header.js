import React from "react";
import PropTypes from "prop-types";

import "./Header.scss";
import logoPlayer from "../asset/image/icon/material-person.svg";
import logoGamepad from "../asset/image/icon/awesome-gamepad.svg";

const Header = ({ playerName, gameLevel, gameScore }) => {
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
        <div className="game-score-wrapper">
          SCORE: <span className="game-score">{gameScore}</span>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  playerName: PropTypes.string.isRequired,
  gameLevel: PropTypes.string.isRequired,
  gameScore: PropTypes.string.isRequired,
};

export default Header;
