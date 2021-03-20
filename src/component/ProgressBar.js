import React from "react";
import PropTypes from "prop-types";

const ProgressBar = ({
  progress = 70,
  text = "",
  size = 200,
  strokeWidth = 8,
  circleOneStroke = "#fff",
  circleTwoStroke = "#ff5155",
  ...svgProps
}) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
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
        opacity="0.23"
      />
      <circle
        className="progress-circle"
        stroke={circleTwoStroke}
        cx={center}
        cy={center}
        r={radius}
        transform={`rotate(-90 ${center} ${center})`}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinejoin="round"
      />
      <text
        className="progress-circle-text"
        x={center}
        y={center}
        dominantBaseline="middle"
        textAnchor="middle"
      >
        {text}
      </text>
    </svg>
  );
};

ProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  circleOneStroke: PropTypes.string,
  circleTwoStroke: PropTypes.string
};

export default ProgressBar;
