import React from "react";
import { ProgressBar } from "react-bootstrap";
import PropTypes from "prop-types";

// Style Imports
import {
  DetailContainer,
  DetailWrapper,
  ProgressBarWrapper,
  TagWrapper,
} from "styles/detail";
import { ImageWrapper } from "styles/detail";

function PokemonDetail({ pokemon }) {
  return (
    <DetailWrapper data-testid="pokemon-details">
      <ImageWrapper image={pokemon?.image}>
        <img src={pokemon?.image} alt="" />
      </ImageWrapper>
      <DetailContainer>
        <tbody>
          <tr className="title">
            <td>{pokemon?.name}</td>
          </tr>
          <tr>
            <td>ABILITIES : </td>
            <td>
              {pokemon?.abilities.map((ability, index) => (
                <TagWrapper key={index}>{ability.ability.name} </TagWrapper>
              ))}
            </td>
          </tr>
          <tr>
            <td>EXPERIENCE : </td>
            <td>{pokemon?.experience}</td>
          </tr>
          <tr>
            <td>HEIGHT : </td>
            <td>{pokemon?.height}</td>
          </tr>
          <tr>
            <td>WEIGHT : </td>
            <td>{pokemon?.weight}</td>
          </tr>
          <tr>
            <td>MOVES : </td>
            <td>
              {pokemon?.moves.map((move, index) => (
                <TagWrapper key={index}>{move.move.name}</TagWrapper>
              ))}
            </td>
          </tr>
          {pokemon?.stats.map((stat, index) => (
            <tr key={index}>
              <td>{stat.stat.name.toUpperCase()} : </td>
              <ProgressBarWrapper>
                <ProgressBar
                  now={stat.base_stat}
                  animated
                  label={stat.base_stat}
                  variant="#feca1b"
                />
              </ProgressBarWrapper>
            </tr>
          ))}
        </tbody>
      </DetailContainer>
    </DetailWrapper>
  );
}

PokemonDetail.propTypes = {
  pokemon: PropTypes.object,
};

export default PokemonDetail;
