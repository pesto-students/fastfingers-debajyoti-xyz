import React from "react";
import PropTypes from "prop-types";
import CircularProgressBar from "./ProgressBar";

function padZero(num, len = 2) {
  return `${num}`.padStart(len, '0');
}

function TimerCircle({ timeMs, totalTimeMs, size = 257.128, ...svgProps }) {
  const timeN = Math.round(timeMs/10);
  const nano = timeN % 100;
  const sec = (timeN - nano) / 100;

  return (
    <CircularProgressBar
      progress={(timeMs * 100) / totalTimeMs}
      text={`${padZero(sec)}:${padZero(nano)}`}
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
