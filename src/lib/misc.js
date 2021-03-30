// @ts-check

import { DifficultyFactorByLevel, GameLevel } from "./constant";

/**
 * A function which does nothing, useful for default values
 * @type {(...args: any[]) => any}
 */
export const noop = () => {};

/**
 * TODO:
 * @param {number} num
 * @param {number} len
 * @returns {string}
 */
export const padZero = (num, len = 2) => {
  return `${num}`.padStart(len, "0");
};

/**
 * TODO:
 * @param {number} timeElasped in milliseconds
 */
export const formatScoreHighRes = (timeElasped) => {
  const timeN = Math.round(timeElasped / 10);
  const nano = timeN % 100;
  const sec = (timeN - nano) / 100;

  return `${padZero(sec)}:${padZero(nano)}`;
};

/**
 * TODO:
 * @param {number} timeElasped in milliseconds
 */
export const formatScoreLowRes = (timeElasped) => {
  const timeS = Math.round(timeElasped / 1000);
  const sec = timeS % 60;
  const min = (timeS - sec) / 60;

  return `${padZero(min)}:${padZero(sec)}`;
};

//

export const withLoadedWordList = (fn) => {
  const groupedWordList = new Map();
  const ready = fetch("/dictionary.text")
    .then((response) => response.text())
    .then((combinedWords) => {
      console.info("WordList downloaded");
      const wordList = combinedWords.split(",");
      const easyList = [];
      const mediumList = [];
      const hardList = [];
      for (const word of wordList) {
        const wordLen = word.length;
        if (wordLen <= 4) {
          easyList.push(word);
        } else if (wordLen <= 8) {
          mediumList.push(word);
        } else {
          hardList.push(word);
        }
      }
      groupedWordList.set(GameLevel.LEVEL_EASY, easyList);
      groupedWordList.set(GameLevel.LEVEL_MEDIUM, mediumList);
      groupedWordList.set(GameLevel.LEVEL_HARD, hardList);
      return groupedWordList;
    });

  const wrappedFn = (...args) => {
    return fn(groupedWordList, ...args);
  };
  wrappedFn.ready = ready;

  return wrappedFn;
};

export const getGameLevel = (difficultyFactory) => {
  if (difficultyFactory >= DifficultyFactorByLevel[GameLevel.LEVEL_HARD]) {
    return GameLevel.LEVEL_HARD;
  } else if (
    difficultyFactory >= DifficultyFactorByLevel[GameLevel.LEVEL_MEDIUM]
  ) {
    return GameLevel.LEVEL_MEDIUM;
  } else {
    return GameLevel.LEVEL_EASY;
  }
};

export const isValidScore = (timeElasped) => {
  return timeElasped > 100;
};
