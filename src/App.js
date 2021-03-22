// @ts-check
import React from "react";

import "./App.scss";
import useHistory from "./lib/useHistory";
import GamePage from "./page/GamePage";
import PageNotFound from "./page/PageNotFound";
import WelcomePage from "./page/WelcomePage";
// import GamePage from "./page/GamePage";

const App = () => {
  const [pathName, navigate] = useHistory();

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
  return <div className="App">{currentPage}</div>;
};

export default App;
