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
    SET_USER_NAME: 'SET_USER_NAME',
    SET_GAME_LEVEL: 'SET_GAME_LEVEL',
    SET_NAME_AND_LEVEL: 'SET_NAME_AND_LEVEL',
    ADD_GAME_SCORE: 'ADD_GAME_SCORE'
}
