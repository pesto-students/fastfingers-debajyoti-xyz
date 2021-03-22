import React from "react";
import PropTypes from "prop-types";

const CircularProgressBar = ({
  progress = 70,
  text = "",
  size = 200,
  strokeWidth = 8,
  ...svgProps
}) => {
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const progressOffset = ((100 - progress) / 100) * circumference;

  return (
    <svg className="circular-progress" width={size} height={size} {...svgProps}>
      <circle
        className="bg-circle"
        stroke={"#fff"}
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        opacity="0.23"
      />
      <circle
        className="fg-circle"
        stroke={"#ff5155"}
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
        className="text-center"
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

CircularProgressBar.propTypes = {
  progress: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export default CircularProgressBar;
