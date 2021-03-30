import React, { useCallback, useContext, useEffect } from "react";

import AppContext from "../../lib/AppContext";
import LiveGameContext from "../../lib/LiveGameContext";
import TimerContext from "../../lib/TimerContext";

import TimerCircle from "../../component/TimerCircle";
import WordDisplay from "../../component/WordDisplay";
import Input from "../../component/Input";

import * as action from "../../lib/action";

import { getGameLevel } from "../../lib/misc";
import {
  DifficultyFactorByLevel,
  DIFFICULTY_FACTOR_INCREMENT,
} from "../../lib/constant";


const GameBoard = () => {
  const {
    state: { gameLevel },
    dispatch: appDispatch,
  } = useContext(AppContext);
  const { state: gameState, dispatch: gameDispatch } = useContext(
    LiveGameContext
  );
  const { lastTimestamp, startTimer, resetTimer, endGame } = useContext(
    TimerContext
  );

  const handleInput = useCallback(
    (input) => {
      gameDispatch(action.setUserInput(input));
    },
    [gameDispatch]
  );

  const elaspedTime = Math.max(lastTimestamp - gameState.wordStartTime, 0);

  const remaningTime = Math.max(gameState.wordMaxTime - elaspedTime, 0);

  useEffect(() => {
    if (
      elaspedTime > 0 &&
      elaspedTime >= gameState.wordMaxTime &&
      gameState.word !== gameState.input
    ) {
      // TODO: show game over animation
      appDispatch(
        action.addGameScore(
          gameState.gameStartTime,
          DifficultyFactorByLevel[gameLevel],
          gameState.difficultyFactory,
          gameState.wordStartTime - gameState.gameStartTime
        )
      );
      endGame();
    }
  }, [appDispatch, elaspedTime, endGame, gameLevel, gameState]);

  useEffect(() => {
    if (gameState.word === gameState.input) {
      const nextDifficultyFactory =
        gameState.difficultyFactory + DIFFICULTY_FACTOR_INCREMENT;
      const nextGameLevel = getGameLevel(nextDifficultyFactory);
      if (gameLevel !== nextGameLevel) {
        appDispatch(action.setGameLevel(nextGameLevel));
      }
      gameDispatch(action.selectNextWord(nextDifficultyFactory));
      resetTimer();
    }
  }, [
    appDispatch,
    gameDispatch,
    resetTimer,
    gameLevel,
    gameState.difficultyFactory,
    gameState.input,
    gameState.word,
  ]);

  /**
   * Start game
   */
  useEffect(() => {
    startTimer();
    gameDispatch(action.selectNextWord(DifficultyFactorByLevel[gameLevel]));
  }, [gameDispatch, gameLevel, startTimer]);

  return (
    <div className="game-board">
      <TimerCircle timeMs={remaningTime} totalTimeMs={gameState.wordMaxTime} />
      <WordDisplay typedInput={gameState.input} word={gameState.word} />
      <Input name="word-input" value={gameState.input} onChange={handleInput} autoFocus />
    </div>
  );
};

export default GameBoard;
