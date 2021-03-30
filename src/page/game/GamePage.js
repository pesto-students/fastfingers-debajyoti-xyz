import React from "react";
import PropTypes from "prop-types";

import ScoreBoard from "../../component/ScoreBoard";
import Header from "../../component/Header";
import StopButton from "./StopButton";
import GameBoard from "./GameBoard";

const GamePage = ({ navigate }) => {
  return (
    <div className="game-page">
      <Header />
      <section className="game-and-score">
        <aside>
          <ScoreBoard />
          <StopButton />
        </aside>
        <GameBoard />
        <footer></footer>
      </section>
    </div>
  );
};
GamePage.propTypes = {
  navigate: PropTypes.func,
};

export default GamePage;
