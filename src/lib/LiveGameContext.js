// @ts-check

import { createContext } from "react";
import { noop } from "./misc";

/**
 * @typedef {Object} ILiveGameState
 * @property {string} word
 * @property {string} input
 * @property {number} gameStartTime
 * @property {number} wordStartTime
 * @property {number} wordMaxTime
 * @property {number} difficultyFactory
 */

/**
 * @typedef {Object} ILiveGameContext
 * @property {ILiveGameState} state
 * @property {<T>(action: import('./AppContext').IAction<T>) => any} dispatch
 */

/**
 * @type ILiveGameContext
 */
export const defaultValue = {
  state: {
    word: "",
    input: "",
    gameStartTime: 0,
    wordStartTime: 0,
    wordMaxTime: 1,
    difficultyFactory: 0,
  },
  dispatch: noop,
};

const LiveGameContext = createContext(defaultValue);

export default LiveGameContext;
