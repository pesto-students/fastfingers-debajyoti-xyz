import { Action, GameLevel } from "./constant";

/**
 * @param {string} name
 * @returns {import("./AppContext").IAction<string>}
 */
export const setUserName = (name) => ({
  type: Action.SET_USER_NAME,
  payload: name,
});

/**
 * @param {GameLevel} level
 * @returns {import("./AppContext").IAction<GameLevel>}
 */
export const setGameLevel = (level = GameLevel.LEVEL_EASY) => ({
  type: Action.SET_GAME_LEVEL,
  payload: level,
});

/**
 * @param {string} name
 * @param {GameLevel} level
 * @returns {import("./AppContext").IAction<{name: string, level: GameLevel}>}
 */
export const setNameAndLevel = (name, level) => ({
  type: Action.SET_NAME_AND_LEVEL,
  payload: { name, level },
});

/**
 *
 * @param {number} startAt
 * @param {number} startDifficultyFactory
 * @param {number} endDifficultyFactory
 * @param {number} timeElasped
 */
export const addGameScore = (
  startAt,
  startDifficultyFactory,
  endDifficultyFactory,
  timeElasped
) => ({
  type: Action.ADD_GAME_SCORE,
  payload: {
    startAt,
    startDifficultyFactory,
    endDifficultyFactory,
    timeElasped,
  },
});
