import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({
  progress = 70,
  text = "02:10",
  textColor = "#fff",
  size = 200,
  strokeWidth = 10,
  circleOneStroke = "#fff",
  circleTwoStroke = "#ff5155",
  ...svgProps
}) => {
  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = ((100 - progress) / 100) * circumference;

  return (
    <svg className="progress" width={size} height={size} {...svgProps}>
      <circle
        className="progress-circle-bg"
        stroke={circleOneStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
      />
      <circle
        className="progress-circle"
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
      />
      <text
        className="progress-circle-text"
        x={center}
        y={center}
        dominantBaseline="middle"
        textAnchor="middle"
        color={textColor}
      >
        {text}
      </text>
    </svg>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  circleOneStroke: PropTypes.string,
  circleTwoStroke: PropTypes.string
};

export default ProgressBar;
