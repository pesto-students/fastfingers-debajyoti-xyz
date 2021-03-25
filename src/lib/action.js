import { Action, GameLevel } from "./constant";
import { withLoadedWordList } from "./misc";

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
 * @returns {import("./AppContext").IAction<any>}
 */
export const resetAppState = () => {
  return { type: Action.RESET_APP_STATE, payload: "" };
};

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

/**
 *
 * @returns {import("./AppContext").IAction<any>}
 */
export const logGameStart = () => {
  return { type: Action.LOG_START_GAME, payload: Date.now() };
};

/**
 *
 * @param {string} inputValue
 * @returns {import("./AppContext").IAction<string>}
 */
export const setUserInput = (inputValue) => {
  return {
    type: Action.SET_USER_WORD_INPUT,
    payload: inputValue,
  };
};

/**
 * @typedef {Object} NextWordTime
 * @property {string} word
 * @property {number} wordStartTime
 * @property {number} difficultyFactory
 */

/**
 * @param {Map<GameLevel, Array<string>>} groupedWordList
 * @param {number} difficultyFactory
 */
export const selectNextWordFromList = (groupedWordList, difficultyFactory) => {
  let gameLevel;
  if (difficultyFactory >= 2) {
    gameLevel = GameLevel.LEVEL_HARD;
  } else if (difficultyFactory >= 1.5) {
    gameLevel = GameLevel.LEVEL_MEDIUM;
  } else {
    gameLevel = GameLevel.LEVEL_EASY;
  }
  const wordList = groupedWordList.get(gameLevel);
  if (!wordList) {
    throw new Error(
      `No word list found for difficultyFactory ${difficultyFactory} and level ${gameLevel}`
    );
  }
  const randomIndex = Math.floor(Math.random() * wordList.length);
  const randomWord = wordList[randomIndex];
  return {
    type: Action.SET_NEXT_WORD_AND_TIME,
    payload: {
      word: randomWord,
      wordStartTime: Date.now(),
      difficultyFactory,
    },
  };
};

/**
 * @type {((difficultyFactory: number) => import("./AppContext").IAction<NextWordTime>) & {ready: Promise<Map<any>>}}
 */
export const selectNextWord = withLoadedWordList(selectNextWordFromList);
