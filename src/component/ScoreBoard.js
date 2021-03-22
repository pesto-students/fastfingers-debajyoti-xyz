// @ts-check
import React from "react";
import PropTypes from "prop-types";
import ScoreItem from "./ScoreItem";
import { formatScore } from "../lib/misc";

import "./ScoreBoard.scss";

/**
 * @typedef {Object} IProp
 * @property {Array<import('../lib/AppContext').Score>} scoreList
 * @property {number} personalBestIndex
 */

/**
 * @param {IProp} props
 * @returns
 */
const ScoreBoard = ({ scoreList, personalBestIndex }) => {
  return (
    <div className="score-board">
      <h3>Score board</h3>
      <ul className="score-list">
        {scoreList.map((score, index) => (
          <ScoreItem
            key={score.gameCount}
            gameCount={score.gameCount}
            gameScore={formatScore(score.timeElasped)}
            isBestScore={index === personalBestIndex}
          />
        ))}
      </ul>
    </div>
  );
};

ScoreBoard.propTypes = {
  scoreList: PropTypes.arrayOf(
    PropTypes.shape({
      gameCount: PropTypes.number,
      startAt: PropTypes.number,
      startDifficultyFactory: PropTypes.number,
      endDifficultyFactory: PropTypes.number,
      timeElasped: PropTypes.number,
    })
  ).isRequired,
  personalBestIndex: PropTypes.number.isRequired,
};

export default ScoreBoard;
