import React, { useContext } from "react";
import AppContext from "../../lib/AppContext";

import crossIcon from "../../asset/image/icon/metro-cross.svg";

const StopButton = () => {
  const { endGame } = useContext(AppContext);
  return (
    <button className="btn btn-md stop-btn" onClick={endGame}>
      <img src={crossIcon} alt="" />
      stop game 
    </button>
  );
};

export default StopButton;
