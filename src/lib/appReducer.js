// @ts-check

/* eslint-disable-next-line no-unused-vars */
import * as appContext from "./AppContext";

/**
 * @param {appContext.IAppState} state
 * @param {appContext.IAction<any>} action
 *
 * @return {appContext.IAppState}
 */
const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER_NAME": {
      return { ...state, playerName: action.payload };
    }
    case "SET_GAME_LEVEL": {
      return { ...state, gameLevel: action.payload };
    }
    case "SET_NAME_AND_LEVEL": {
      const { name, level } = action.payload;
      return { ...state, playerName: name, gameLevel: level };
    }
    case "ADD_GAME_SCORE": {
      const {
        startAt,
        startDifficultyFactory,
        endDifficultyFactory,
        timeElasped,
      } = action.payload;
      const { scoreList } = state;
      let maxTimeElaspedScore = null;
      let bestScoreIndex = 0;
      let maxGameCount = 0;
      const N = scoreList.length;
      for (let i = 0; i < N; i++) {
        const score = scoreList[i];
        if (score.gameCount > maxGameCount) {
          maxGameCount = score.gameCount;
        }
        if (score.timeElasped > maxTimeElaspedScore.timeElasped) {
          maxTimeElaspedScore = score;
          bestScoreIndex = i;
        }
      }
      const currentScore = {
        gameCount: maxGameCount + 1,
        startAt,
        startDifficultyFactory,
        endDifficultyFactory,
        timeElasped,
      };
      const newScoreList = scoreList.slice(0, Math.min(9, scoreList.length));
      newScoreList.push(currentScore);
      return { ...state, scoreList: newScoreList, bestScoreIndex };
    }
    default:
      return state;
  }
};

/**
 * @param {typeof appReducer} reducer
 * @returns {(state: appContext.IAppState, action: appContext.IAction<any>) => ReturnType<reducer>}
 */
export const withPeristance = (reducer) => (state, action) => {
  const nextState = reducer(state, action);
  localStorage.setItem("ff_state", JSON.stringify(nextState));
  return nextState;
};

/**
 *
 * @param {appContext.IAppState} defaultState
 * @returns {appContext.IAppState}
 */
export const hydrateState = (defaultState) => {
  const stateAsString = localStorage.getItem("ff_state");
  if (stateAsString) {
    try {
      const state = JSON.parse(stateAsString);
      return {
        ...defaultState,
        ...state,
      };
    } catch (error) {
      console.warn("Failed to parse ff_state", error);
    }
  }
  return defaultState;
};

export default appReducer;
