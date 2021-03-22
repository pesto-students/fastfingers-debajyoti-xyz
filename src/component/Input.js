// @ts-check
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

/**
 * @typedef {Object} IProp
 * @property {(string) => void} onChange
 * @property {string?} name
 * @property {string?} placeholder
 */

/**
 * A subscribe only uncontrolled input component styled using css
 * i.e. we cannot set the input but can subscribe to change event
 * @param {IProp} prop
 * @returns {React.ReactElement}
 */
const Input = ({ onChange, name, placeholder }) => {
  /**
   * @type {React.MutableRefObject<HTMLInputElement>}
   */
  const $ref = useRef();

  useEffect(() => {
    const handleChange = (evt) => {
      onChange(evt.target.value);
    };
    const $input = $ref.current;
    $input.addEventListener("change", handleChange);
    return () => {
      $input.removeEventListener("change", handleChange);
    };
  }, [onChange]);

  return (
    <input
      className="ff-input"
      name={name}
      placeholder={placeholder}
      ref={$ref}
    />
  );
};

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
