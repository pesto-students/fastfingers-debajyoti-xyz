import React from "react";
import PropTypes from "prop-types";

import logoKeyboard from "../asset/image/icon/awesome-keyboard.svg";
import logoPlay from "../asset/image/icon/awesome-play.svg";
import Input from "../component/Input";
import Select from "../component/Select";

export const LEVEL_EASY = "easy";
export const LEVEL_MEDIUM = "medium";
export const LEVEL_HARD = "hard";

const WelcomePage = ({ navigate }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <Input
            onChange={console.log}
            name="playerName"
            placeholder="TYPE YOUR NAME"
          />
          <Select
            name="gameLevel"
            onChange={console.log}
            optionList={[
              { value: LEVEL_EASY, label: "EASY" },
              { value: LEVEL_MEDIUM, label: "MEDIUM" },
              { value: LEVEL_HARD, label: "HARD" },
            ]}
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
