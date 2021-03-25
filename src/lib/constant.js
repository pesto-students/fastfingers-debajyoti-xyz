// @ts-check

/** @enum {string} */
export const GameLevel = {
  LEVEL_EASY: "easy",
  LEVEL_MEDIUM: "medium",
  LEVEL_HARD: "hard",
};

export const DifficultyFactorByLevel = {
  [GameLevel.LEVEL_EASY]: 1,
  [GameLevel.LEVEL_MEDIUM]: 1.5,
  [GameLevel.LEVEL_HARD]: 2,
};

export const Action = {
  SET_USER_NAME: "SET_USER_NAME",
  SET_GAME_LEVEL: "SET_GAME_LEVEL",
  SET_NAME_AND_LEVEL: "SET_NAME_AND_LEVEL",
  RESET_APP_STATE: "RESET_APP_STATE",
  ADD_GAME_SCORE: "ADD_GAME_SCORE",

  LOG_START_GAME: "LOG_START_GAME",

  SET_USER_WORD_INPUT: "SET_USER_WORD_INPUT",
  SET_NEXT_WORD_AND_TIME: "SET_NEXT_WORD_AND_TIME",
};

export const DIFFICULTY_FACTOR_INCREMENT = 0.1;
