import React from "react";

import "./App.scss";
import { GamePage } from "./page/GamePage";
// import WelcomePage from "./page/WelcomePage";

const App = () => {
  return (
      <div className="App">
        {/* <WelcomePage /> */}
        <GamePage />
      </div>
  );
}

export default App;
