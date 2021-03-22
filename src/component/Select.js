// @ts-check
import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./Select.scss";

/**
 * @typedef {Object} IProp
 * @property {(string) => void} onChange
 * @property {Array<{value: string, label: string}>} optionList
 * @property {string?} defaultValue
 * @property {string?} name
 * @property {string?} placeholder
 */

/**
 * A subscribe only uncontrolled select component styled using css
 * i.e. we cannot set the select but can subscribe to change event
 * @param {IProp} prop
 * @returns {React.ReactElement}
 */
const Select = ({ onChange, optionList, defaultValue, name, placeholder }) => {
  /**
   * @type {React.MutableRefObject<HTMLSelectElement>}
   */
  const $ref = useRef();

  useEffect(() => {
    const handleChange = (evt) => {
      onChange(evt.target.value);
    };
    const $select = $ref.current;
    $select.addEventListener("change", handleChange);
    return () => {
      $select.removeEventListener("change", handleChange);
    };
  }, [onChange]);

  return (
    <select
      className="ff-select"
      name={name}
      placeholder={placeholder}
      defaultValue={defaultValue}
      ref={$ref}
    >
      {optionList.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  onChange: PropTypes.func.isRequired,
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
