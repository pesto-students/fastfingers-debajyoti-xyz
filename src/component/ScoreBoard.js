// @ts-check
import React, { useContext } from "react";
import PropTypes from "prop-types";
import ScoreItem from "./ScoreItem";
import { formatScoreHighRes } from "../lib/misc";

import "./ScoreBoard.scss";
import AppContext from "../lib/AppContext";

/**
 * @typedef {Object} IProp
 * @property {Array<import('../lib/AppContext').Score>} scoreList
 * @property {number} personalBestIndex
 */

/**
 * @param {IProp} props
 * @returns
 */
export const ScoreBoard = ({ scoreList, personalBestIndex }) => {
  return (
    <div className="score-board">
      <h3>Score board</h3>
      <ul className="score-list">
        {scoreList.map((score, index) => (
          <ScoreItem
            key={score.gameCount}
            gameCount={score.gameCount}
            gameScore={formatScoreHighRes(score.timeElasped)}
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

const ScoreBoardContainer = () => {
  const {
    state: { scoreList, bestScoreIndex },
  } = useContext(AppContext);
  return (
    <ScoreBoard scoreList={scoreList} personalBestIndex={bestScoreIndex} />
  );
};

export default ScoreBoardContainer;
