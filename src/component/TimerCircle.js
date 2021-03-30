import React from "react";
import PropTypes from "prop-types";
import CircularProgressBar from "./CircularProgressBar";

import { formatScoreHighRes } from "../lib/misc";

function TimerCircle({ timeMs, totalTimeMs, size = 257.128, ...svgProps }) {
  return (
    <CircularProgressBar
      progress={(timeMs * 100) / totalTimeMs}
      text={formatScoreHighRes(timeMs)}
      {...svgProps}
    />
  );
}

TimerCircle.propTypes = {
  /**
   * Time elasped in milliseconds
   */
  timeMs: PropTypes.number.isRequired,
  /**
   * Total time in milliseconds
   */
  totalTimeMs: PropTypes.number.isRequired,
  size: PropTypes.number,
};

export default TimerCircle;
