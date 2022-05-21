import React from "react";
import PropTypes from "prop-types";

// Style Imports
import { ButtonWrapper } from "styles/styles";

function Button({ text, clickHandler, disabled, id }) {
  return (
    <ButtonWrapper>
      <button onClick={clickHandler} disabled={disabled} data-testid={id}>
        {text}
      </button>
    </ButtonWrapper>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  id: PropTypes.string,
  disabled: PropTypes.bool,
  changeHclickHandlerndler: PropTypes.func,
};

Button.defaultProps = {
  text: "",
  id: "",
  disabled: false,
};

export default Button;
