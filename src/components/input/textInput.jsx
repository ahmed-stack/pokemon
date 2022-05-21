import React from "react";
import PropTypes from "prop-types";

// Style Imports
import { InputWrapper } from "styles/styles";

function TextInput({ type, changeHandler, placeholder, disabled }) {
  return (
    <InputWrapper>
      <input
        data-testid="input"
        type={type}
        onChange={changeHandler}
        placeholder={placeholder}
        disabled={disabled}
      />
    </InputWrapper>
  );
}

TextInput.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  changeHandler: PropTypes.func,
};

TextInput.defaultProps = {
  type: "text",
  placeholder: "",
  disabled: false,
};

export default TextInput;
