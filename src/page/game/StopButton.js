import React, { useContext } from "react";
import AppContext from "../../lib/AppContext";

import LiveGameContext from "../../lib/LiveGameContext";
import * as action from "../../lib/action";
import { DifficultyFactorByLevel } from "../../lib/constant";

import crossIcon from "../../asset/image/icon/metro-cross.svg";

const StopButton = () => {
  const {
    endGame,
    dispatch,
    state: { gameLevel },
  } = useContext(AppContext);
  const {
    state: { gameStartTime, difficultyFactory, wordStartTime },
  } = useContext(LiveGameContext);

  const handleEnd = () => {
    dispatch(
      action.addGameScore(
        gameStartTime,
        DifficultyFactorByLevel[gameLevel],
        difficultyFactory,
        wordStartTime - gameStartTime
      )
    );
    endGame();
  };

  return (
    <button className="btn btn-md stop-btn" onClick={handleEnd}>
      <img src={crossIcon} alt="" />
      stop game
    </button>
  );
};

export default StopButton;
