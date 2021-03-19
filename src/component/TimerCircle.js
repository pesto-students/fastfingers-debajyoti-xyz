import React from "react";
// import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

function TimerCircle({
  timeMs,
  totalTimeMs,
  size = 257.128,
  textColor = "#fff",
  ...svgProps
}) {
    const timeSec = Math.round(timeMs / 1000);
    const sec = timeSec % 60;
    const min = (timeSec - sec) / 60;
  return (
    <ProgressBar progress={(timeMs * 100)/ totalTimeMs} text={`${min}:${sec}`} />
  );
}

TimerCircle.propTypes = {};

export default TimerCircle;
