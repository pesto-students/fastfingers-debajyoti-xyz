import React from "react";
// import PropTypes from "prop-types";
import ProgressBar from "./ProgressBar";

function padZero(num, len = 2) {
  return `${num}`.padStart(len, '0');
}

function TimerCircle({ timeMs, totalTimeMs, size = 257.128, ...svgProps }) {
  // const timeSec = Math.round(timeMs / 1000);
  // const sec = timeSec % 60;
  // const min = (timeSec - sec) / 60;

  // const minString = `${min}`.padStart(2, '0');
  // const secString = `${sec}`.padStart(2, '0');
// 12000
  const timeN = Math.round(timeMs/10);
  const nano = timeN % 100;
  const sec = (timeN - nano) / 100;

  return (
    <ProgressBar
      progress={(timeMs * 100) / totalTimeMs}
      text={`${padZero(sec)}:${padZero(nano)}`}
      {...svgProps}
    />
  );
}

TimerCircle.propTypes = {};

export default TimerCircle;
