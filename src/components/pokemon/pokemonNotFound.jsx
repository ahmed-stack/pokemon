import React from "react";
import PropTypes from "prop-types"

// Style Imports
import { NotFoundWrapper } from "styles/styles";

function PokemonNotFound({ text }) {
  return <NotFoundWrapper>{text}</NotFoundWrapper>;
}

PokemonNotFound.propTypes = {
  text: PropTypes.string,
};

PokemonNotFound.defaultProps = {
  text: "Not Found",
};

export default PokemonNotFound;
