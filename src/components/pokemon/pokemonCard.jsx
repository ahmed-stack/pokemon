import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

// Local Imports
import {
  addToFavourites,
  removeFromFavourite,
} from "store/reducers/pokemonReducer";
import {
  getFavouritePokemons,
  getPokemonCompareModalState,
} from "store/selectors/pokemonSelector";

// Component Imports
import Button from "components/button/button";

// Style Imports
import { ButtonConatiner, FavouriteIconConatiner } from "styles/card";
import { CardWrapper, TextWrapper } from "styles/card";

function PokemonCard({ pokemon, detailClickHandler, compareClickHandler, index }) {
  const dispatch = useDispatch();

  const comparePokemon = useSelector(getPokemonCompareModalState);
  const favourites = useSelector(getFavouritePokemons);

  const { pokemon1 } = comparePokemon;

  const isFavourite = useMemo(() => {
    return !!favourites.find((favPok) => favPok.id === pokemon.id);
  }, [pokemon, favourites]);

  return (
    <CardWrapper
      data-testid="pokemon-item"
      image={pokemon.image}
      shinyImage={pokemon.shinyImage}
    >
      <TextWrapper>
        <FavouriteIconConatiner>
          {isFavourite ? (
            <img
              src="favourite.png"
              onClick={() => dispatch(removeFromFavourite(pokemon))}
              alt=""
            />
          ) : (
            <img
              src="not_favourite.png"
              onClick={() => dispatch(addToFavourites(pokemon))}
              alt=""
            />
          )}
        </FavouriteIconConatiner>
        <h1>{pokemon.name}</h1>
        <div>Weight : {pokemon.weight}</div>
        <div>Height : {pokemon.height}</div>
        <div>Experience : {pokemon.experience}</div>
        <ButtonConatiner>
          <Button
            id={`view-details-${index}`}
            text="VIEW DETAILS"
            clickHandler={() => detailClickHandler(pokemon)}
          />
          <Button
            id={`compare-pokemon-${index}`}
            text={pokemon1?.id === pokemon.id ? "SELECTED" : "COMPARE"}
            clickHandler={() => compareClickHandler(pokemon)}
            disabled={pokemon1?.id === pokemon.id}
          />
        </ButtonConatiner>
      </TextWrapper>
    </CardWrapper>
  );
}

PokemonCard.propTypes = {
  pokemon: PropTypes.object,
  detailClickHandler: PropTypes.func,
  compareClickHandler: PropTypes.func,
  index: PropTypes.number,
};


export default PokemonCard;
