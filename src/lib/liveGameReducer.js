// @ts-check

/* eslint-disable-next-line no-unused-vars */
import * as appContext from "./AppContext";
import { DifficultyFactorByLevel } from "./constant";
/* eslint-disable-next-line no-unused-vars */
import * as liveGameContext from "./LiveGameContext";

/**
 * @param {liveGameContext.ILiveGameState} state
 * @param {appContext.IAction<any>} action
 *
 * @return {liveGameContext.ILiveGameState}
 */
const liveGameReducer = (state, action) => {
  switch (action.type) {
    case "LOG_START_GAME": {
      return {
        ...liveGameContext.defaultValue.state,
        gameStartTime: action.payload,
      };
    }
    case "SET_USER_WORD_INPUT": {
      return { ...state, input: action.payload };
    }
    case "SYNC_DIFFICULTY_FACTORY": {
      const gameLevel = action.payload;
      const difficultyFactory = DifficultyFactorByLevel[gameLevel];
      return { ...state, difficultyFactory };
    }
    case "SET_NEXT_WORD_AND_TIME": {
      const { word, wordStartTime, difficultyFactory } = action.payload;
      const wordMaxTime = Math.max(
        2000,
        Math.ceil(word.length / difficultyFactory) * 1000
      );
      return {
        ...state,
        input: "",
        word,
        wordStartTime,
        difficultyFactory,
        wordMaxTime,
      };
    }
    default:
      return state;
  }
};

export default liveGameReducer;
