// @ts-nocheck
// TODO: troubleshoot why ts-check is not working with forwardRef
// How do we specify IProps to forwardRef's type vars
import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";

import "./Input.scss";

/**
 * @typedef {Object} IProp
 * @property {string?} value
 * @property {((string) => void)?} onChange
 * @property {string?} name
 * @property {string?} placeholder
 */

/**
 * Styled input with simplified onChange which transforms values to lowercase
 * but displayed in uppercase using css-transform
 * @param {IProp} prop
 * @returns {React.ReactElement}
 */
const Input = forwardRef(({ value, onChange, name, placeholder, autoFocus = false }, ref) => {
  const handleChange = useCallback(
    (evt) => {
      if (onChange) {
        const value = evt.target.value;
        const transformedValue = value ? value.toLowerCase() : value;
        onChange(transformedValue);
      }
    },
    [onChange]
  );

  return (
    <input
      className="ff-input"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange ? handleChange : undefined}
      autoFocus={autoFocus}
      autoComplete="off"
      ref={ref}
    />
  );
});

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
