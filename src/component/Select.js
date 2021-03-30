// @ts-nocheck
// TODO: troubleshoot why ts-check is not working with forwardRef
// Simmilar to ./Input
import React, { forwardRef, useCallback } from "react";
import PropTypes from "prop-types";

import "./Select.scss";

/**
 * @typedef {Object} IProp
 * @property {string?} value
 * @property {((string) => void)?} onChange
 * @property {Array<{value: string, label: string}>} optionList
 * @property {string?} defaultValue
 * @property {string?} name
 * @property {string?} placeholder
 */

/**
 * Styled input with simplified onChange which transforms values to lowercase
 * but displayed in uppercase using css-transform
 * @param {IProp} prop
 * @returns {React.ReactElement}
 */
const Select = forwardRef(
  ({ value, onChange, optionList, defaultValue, name, placeholder }, ref) => {
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
      <select
        className="ff-select"
        name={name}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange ? handleChange : undefined}
        autoComplete="off"
        ref={ref}
      >
        {optionList.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    );
  }
);

Select.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  optionList: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Select;
