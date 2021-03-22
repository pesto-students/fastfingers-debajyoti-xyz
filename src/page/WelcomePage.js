import React, { useContext } from "react";
import PropTypes from "prop-types";

import Input from "../component/Input";
import Select from "../component/Select";

import AppContext from "../lib/AppContext";

import logoKeyboard from "../asset/image/icon/awesome-keyboard.svg";
import logoPlay from "../asset/image/icon/awesome-play.svg";
import { setNameAndLevel } from "../lib/action";
import { GameLevel } from "../lib/constant";

const levelOptions = Object.keys(GameLevel).map((levelkey) => ({
  value: GameLevel[levelkey],
  label: GameLevel[levelkey].toUpperCase(),
}));

const WelcomePage = ({ navigate }) => {
  const {
    state: { playerName, gameLevel },
    dispatch,
  } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      playerName: { value: name },
      gameLevel: { value: level },
    } = e.currentTarget;
    dispatch(setNameAndLevel(name.trim(), level));
    navigate("/game");
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
            <Input
              onChange={console.log}
              name="playerName"
              placeholder="TYPE YOUR NAME"
            />
          )}

          <Select
            name="gameLevel"
            defaultValue={gameLevel}
            onChange={console.log}
            optionList={levelOptions}
          />
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
  navigate: PropTypes.func.isRequired,
};

export default WelcomePage;
