import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import Input from "../component/Input";
import Select from "../component/Select";

import { GameLevel } from "../lib/constant";
import AppContext from "../lib/AppContext";

import logoKeyboard from "../asset/image/icon/awesome-keyboard.svg";
import logoPlay from "../asset/image/icon/awesome-play.svg";

const levelOptions = Object.keys(GameLevel).map((levelkey) => ({
  value: GameLevel[levelkey],
  label: GameLevel[levelkey].toUpperCase(),
}));

const WelcomePage = () => {
  const {
    state: { playerName, gameLevel },
    resetData,
    startGame,
  } = useContext(AppContext);
  const [errors, setErrors] = useState({ playerName: "", gameLevel: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playerName) {
      const {
        gameLevel: { value: level },
      } = e.target;
      if (!level) {
        setErrors({
          playerName: "",
          gameLevel: " *Please select game level",
        });
        return;
      }
      startGame(playerName, level);
    } else {
      const {
        playerName: { value: name },
        gameLevel: { value: level },
      } = e.target;
      const inputName = name.trim().toUpperCase();
      const inputLevel = level;
      setErrors({
        playerName: !inputName ? " *Please enter your name" : "",
        gameLevel: !inputLevel ? " *Please select game level" : "",
      });
      if (!inputName || !inputLevel) {
        return;
      }
      startGame(inputName, inputLevel);
    }
  };

  const handleReset = (e) => {
    e.preventDefault();
    resetData();
  };

  return (
    <div className="welcome-page centered">
      <header>
        <img src={logoKeyboard} alt="" />
        <h1>fast fingers</h1>
        <span className="app-description">the ultimate typing game</span>
      </header>
      <form onSubmit={handleSubmit}>
        <section className="parameters-input">
          {playerName ? (
            <div className="welcome-block">
              <h3 className="welcome-title">Welcome back {playerName}!</h3>
              <i className="welcome-msg">Select level and start the game.</i>
            </div>
          ) : (
            <div className="player-name">
              <Input name="playerName" placeholder="TYPE YOUR NAME" autoFocus />
              <div className="field-error"> {errors.playerName}</div>
            </div>
          )}

          <div className="game-level">
            <Select
              name="gameLevel"
              defaultValue={gameLevel}
              optionList={levelOptions}
            />
            <div className="field-error"> {errors.gameLevel}</div>
          </div>
          {playerName ? (
            <a className="reset-data" href="#clear-data" onClick={handleReset}>
              Not {playerName}? Click to start afresh
            </a>
          ) : null}
          <button className="btn btn-lg" type="submit">
            <img src={logoPlay} alt="" />
            <span>Start Game</span>
          </button>
        </section>
      </form>
    </div>
  );
};
WelcomePage.propTypes = {
  navigate: PropTypes.func,
};

export default WelcomePage;
