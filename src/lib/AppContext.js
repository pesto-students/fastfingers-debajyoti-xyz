// @ts-check

import { createContext } from "react";
import * as constants from "./constant";
import { noop } from "./misc";

/**
 * @typedef {Object} Score
 * @property {number} gameCount
 * @property {number} startAt Game start time in milliseconds
 * @property {number} startDifficultyFactory
 * @property {number} endDifficultyFactory
 * @property {number} timeElasped milliseconds the user was able to stay in the game
 */

/**
 * @template T
 * @typedef {Object} IAction<T>
 * @property {keyof constants.Action} type
 * @property {T} payload
 */

/**
 * @typedef {Object} IAppState
 * @property {string} playerName
 * @property {constants.GameLevel} gameLevel
 * @property {Array<Score>} scoreList Stores top score & last 9 game's score
 * @property {number} bestScoreIndex
 */

/**
 * @typedef {Object} IAppContext
 * @property {IAppState} state
 * @property {<T>(action: IAction<T>) => any} dispatch
 */

/**
 * @type IAppContext
 */
export const defaultValue = {
  state: {
    playerName: "",
    gameLevel: constants.GameLevel.LEVEL_EASY,
    scoreList: [],
    bestScoreIndex: 0
  },
  dispatch: noop,
};

const AppContext = createContext(defaultValue);


export default AppContext;
