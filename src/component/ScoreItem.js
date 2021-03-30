import React from "react";
import PropTypes from "prop-types";

const ScoreItem = ({ gameCount, gameScore, isBestScore }) => {
  return (
    <li>
      <span className="game-name">Game {gameCount}</span>
      <span className="game-score">{gameScore}</span>
      {isBestScore ? (
        <strong className="is-personal-best">personal best</strong>
      ) : null}
    </li>
  );
};

ScoreItem.propTypes = {
  gameCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  gameScore: PropTypes.string.isRequired,
  isBestScore: PropTypes.bool.isRequired,
};

export default ScoreItem;
