// @ts-check
import React, { useReducer } from "react";

import appReducer, { hydrateState, withPeristance } from "./lib/appReducer";
import useHistory from "./lib/useHistory";
import AppContext, { defaultValue } from "./lib/AppContext";

import WelcomePage from "./page/WelcomePage";
import GamePage from "./page/GamePage";
import PageNotFound from "./page/PageNotFound";
// import GamePage from "./page/GamePage";

import "./App.scss";

const enhancedReducer = withPeristance(appReducer);

const App = () => {
  const [pathName, navigate] = useHistory();
  const [appState, dispatch] = useReducer(
    enhancedReducer,
    defaultValue.state,
    hydrateState
  );

  let currentPage = null;
  switch (pathName) {
    case "/": {
      currentPage = <WelcomePage navigate={navigate} />;
      break;
    }
    case "/game": {
      currentPage = <GamePage navigate={navigate} />;
      break;
    }
    default:
      currentPage = <PageNotFound navigate={navigate} />;
  }
  return (
    <AppContext.Provider value={{ state: appState, dispatch }}>
      <div className="App">{currentPage}</div>
    </AppContext.Provider>
  );
};

export default App;
