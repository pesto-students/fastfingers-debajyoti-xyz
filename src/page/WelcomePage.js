import React from "react";

import logoKeyboard from "../asset/image/icon/awesome-keyboard.svg";
import logoPlay from "../asset/image/icon/awesome-play.svg";

export const LEVEL_EASY = "easy";
export const LEVEL_MEDIUM = "medium";
export const LEVEL_HARD = "hard";

const WelcomePage = () => {
  return (
    <div className="welcome-page centered">
      <header>
        <img src={logoKeyboard} alt="" />
        <h1>fast fingers</h1>
        <span className="app-description">the ultimate typing game</span>
      </header>
      <section className="parameters-input">
        <input placeholder="TYPE YOUR NAME" />
        <select>
          <option value={LEVEL_EASY}>EASY</option>
          <option value={LEVEL_MEDIUM}>MEDIUM</option>
          <option value={LEVEL_HARD}>HARD</option>
        </select>
      </section>
      <button>
          <img src={logoPlay} alt="" />
          <span>Start Game</span>
      </button>
    </div>
  );
};

export default WelcomePage;
