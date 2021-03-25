// @ts-check
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
} from "react";

import useHistory from "./lib/useHistory";
import appReducer, { hydrateState, withPeristance } from "./lib/appReducer";
import liveGameReducer from "./lib/liveGameReducer";
import AppContext, { defaultValue as appDefaultValue } from "./lib/AppContext";
import LiveGameContext, {
  defaultValue as liveGameDefaultValue,
} from "./lib/LiveGameContext";
import TimerContext from "./lib/TimerContext";
import {
  selectNextWord,
  logGameStart,
  setNameAndLevel,
  resetAppState,
} from "./lib/action";

import WelcomePage from "./page/WelcomePage";
import GamePage from "./page/game/GamePage";
import PageNotFound from "./page/PageNotFound";
import ScorePage from "./page/score/ScorePage";

import "./App.scss";

const enhancedReducer = withPeristance(appReducer);

const App = () => {
  const lastIntervalRef = useRef(null);
  const [isLoading, setLoading] = useState(true);
  const [timerStartTime, setTimerStartTime] = useState(0);
  const [lastTimestamp, setLastTimestamp] = useState(0);

  const [pathName, navigate] = useHistory();

  const [appState, appDispatch] = useReducer(
    enhancedReducer,
    appDefaultValue.state,
    hydrateState
  );
  const [liveGameState, liveGameDispatch] = useReducer(
    liveGameReducer,
    liveGameDefaultValue.state
  );

  const startTimer = useCallback(() => {
    if (lastIntervalRef.current) {
      clearInterval(lastIntervalRef.current);
    }
    setTimerStartTime(Date.now());
    setLastTimestamp(0);

    lastIntervalRef.current = setInterval(() => {
      const timeStamp = Date.now();
      setLastTimestamp(timeStamp);
    }, 100);
  }, []);

  const endTimer = useCallback(() => {
    if (lastIntervalRef.current) {
      clearInterval(lastIntervalRef.current);
      lastIntervalRef.current = null;
    }
  }, []);

  const endGame = useCallback(() => {
    endTimer();
    setLastTimestamp(0);
    setTimerStartTime(0);
    navigate("/score");
  }, [endTimer, navigate]);

  const startGame = useCallback(
    (name, level) => {
      appDispatch(setNameAndLevel(name, level));
      liveGameDispatch(logGameStart());
      setTimeout(() => {
        navigate("/game");
      }, 0);
    },
    [navigate]
  );

  const resetData = useCallback(() => {
    appDispatch(resetAppState());
  }, []);

  /**
   * Cleanup timer
   */
  useEffect(() => {
    return () => {
      endTimer();
    };
  }, [endTimer]);

  useEffect(() => {
    let isMounted = true;
    selectNextWord.ready
      .then(() => {
        if (isMounted) {
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error(error);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  const appContextValue = useMemo(() => {
    return {
      state: appState,
      dispatch: appDispatch,
      resetData,
      startGame,
      endGame,
    };
  }, [appState, appDispatch, resetData, startGame, endGame]);

  const liveGameContextValue = useMemo(() => {
    return { state: liveGameState, dispatch: liveGameDispatch };
  }, [liveGameState, liveGameDispatch]);

  const timerContextValue = {
    timerStartTime,
    lastTimestamp,
    startTimer,
    resetTimer: startTimer,
    endTimer,
    endGame,
  };

  let currentPage = null;
  if (!isLoading) {
    switch (pathName) {
      case "/": {
        currentPage = <WelcomePage navigate={navigate} />;
        break;
      }
      case "/game": {
        currentPage = <GamePage navigate={navigate} />;
        break;
      }
      case "/score": {
        currentPage = <ScorePage navigate={navigate} />;
        break;
      }
      default:
        currentPage = <PageNotFound navigate={navigate} />;
    }
  }
  return (
    <AppContext.Provider value={appContextValue}>
      <LiveGameContext.Provider value={liveGameContextValue}>
        <TimerContext.Provider value={timerContextValue}>
          <div className="App">{currentPage}</div>
        </TimerContext.Provider>
      </LiveGameContext.Provider>
    </AppContext.Provider>
  );
};

export default App;
