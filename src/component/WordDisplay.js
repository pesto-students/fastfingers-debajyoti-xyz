// @ts-check
import React from "react";
import PropTypes from "prop-types";

import { matchInput } from "../lib/word";

import "./WordDisplay.scss";

/**
 *
 * @param {import('../lib/word').ChunkType} chunkType
 */
const mapChunkTypeToClassName = (chunkType) => {
  switch (chunkType) {
    case "MATCH":
      return "word-success";
    case "MISMATCH":
      return "word-error";
    default:
      return "word-untyped";
  }
};

const WordDisplay = ({ typedInput, word }) => {
  const chunks = matchInput(typedInput, word);

  return (
    <div className="word-display">
      {chunks.map(({ wordlet, type }) => (
        <span key={wordlet} className={mapChunkTypeToClassName(type)}>
          {wordlet}
        </span>
      ))}
    </div>
  );
};

WordDisplay.propTypes = {
  typedInput: PropTypes.string.isRequired,
  word: PropTypes.string.isRequired,
};

export default WordDisplay;
