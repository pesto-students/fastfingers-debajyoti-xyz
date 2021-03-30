import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import AppContext from "../../lib/AppContext";
import Header from "../../component/Header";
import { formatScoreLowRes } from "../../lib/misc";

import replayIcon from "../../asset/image/icon/open-reload.svg";

const ScorePage = ({ navigate }) => {
  const {
    state: { scoreList, bestScoreIndex, playerName, gameLevel },
    startGame,
  } = useContext(AppContext);

  const handleReplay = () => {
    startGame(playerName, gameLevel);
  };

  const handleQuit = () => {
    navigate("/");
  };

  useEffect(() => {
    if (scoreList.length === 0) {
      navigate("/");
    }
  }, [scoreList, navigate]);

  if (scoreList.length === 0) {
    return null;
  }

  const currentScore = scoreList[scoreList.length - 1];
  const isHighScore = bestScoreIndex === scoreList.length - 1;

  const { gameCount, timeElasped } = currentScore;

  return (
    <div className="score-page">
      <Header hideScore />
      <div className="score-view">
        <h1>SCORE : GAME {gameCount}</h1>
        <div className="game-score">{formatScoreLowRes(timeElasped)}</div>
        {isHighScore ? <div className="high-score">New High Score</div> : null}
        <button className="btn btn-md replay-btn" onClick={handleReplay}>
          <img src={replayIcon} alt="" />
          PLAY AGAIN
        </button>
      </div>
      <footer>
        <button className="btn btn-md quit-btn" onClick={handleQuit}>
          QUIT
        </button>
      </footer>
    </div>
  );
};

ScorePage.propTypes = {
  navigate: PropTypes.func,
};

export default ScorePage;
