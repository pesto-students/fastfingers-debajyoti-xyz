// @ts-check

import { createContext } from "react";
import { noop } from "./misc";

/**
 * @typedef {Object} ITimerContext
 * @property {number} timerStartTime
 * @property {number} lastTimestamp
 * @property {() => void} startTimer
 * @property {() => void} resetTimer
 * @property {() => void} endTimer
 * @property {() => void} endGame
 */

/**
 * @type ITimerContext
 */
export const defaultValue = {
  timerStartTime: 0,
  lastTimestamp: 0,
  startTimer: noop,
  resetTimer: noop,
  endTimer: noop,
  endGame: noop,
};

const TimerContext = createContext(defaultValue);

export default TimerContext;
