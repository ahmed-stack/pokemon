import React from "react";
import PropTypes from "prop-types";

// Style Imports
import { SelectWrapper } from "styles/styles";

function Select({ placeholder, placeholderValue, options, changeHandler }) {
  return (
    <SelectWrapper>
      <select onChange={changeHandler} data-testid="select">
        <option value={placeholderValue}>{placeholder}</option>
        {options.map((elem, index) => (
          <option data-testid="option-items" value={elem.value} key={index}>
            {elem.label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
}

Select.propTypes = {
  placeholder: PropTypes.string,
  placeholderValue: PropTypes.string,
  options: PropTypes.array,
  changeHandler: PropTypes.func,
};

Select.defaultProps = {
  placeholder: "",
  placeholderValue: "",
  options: [],
};

export default Select;
