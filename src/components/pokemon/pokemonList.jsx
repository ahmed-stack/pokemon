import React from "react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// Local Imports
import { setPokemonDetailModalState } from "store/reducers/pokemonReducer";
import { getNextPage, getSearchedError } from "store/selectors/pokemonSelector";
import {
  comparePokemonAction,
  getPokemonsAction,
} from "store/thunks/pokemonThunk";

// Style Imports
import { GridContainer, Grid } from "styles/list";

// Component Imports
import { PokemonCard, PokemonNotFound } from "components/pokemon";

function PokemonList({ list }) {
  const dispatch = useDispatch();

  const { pathname } = useLocation();

  const route = useSelector(getNextPage);

  const searchError = useSelector(getSearchedError);

  const pokemonDetailClickHandler = (pokemon) => {
    dispatch(setPokemonDetailModalState({ show: true, pokemon }));
  };

  const pokemonCompareClickHandler = (pokemon) => {
    dispatch(comparePokemonAction(pokemon));
  };

  return (
    <GridContainer id="grid-container">
      {!!searchError || !list.length ? (
        <PokemonNotFound text="NO POKEMON FOUND" />
      ) : (
        <InfiniteScroll
          dataLength={list.length}
          next={() => dispatch(getPokemonsAction(route))}
          hasMore={!!route && pathname !== "/favourites"}
          scrollableTarget="grid-container"
        >
          <Grid>
            {list.map((pokemon, index) => (
              <PokemonCard
                pokemon={pokemon}
                detailClickHandler={pokemonDetailClickHandler}
                compareClickHandler={pokemonCompareClickHandler}
                key={index}
                index={index}
              />
            ))}
          </Grid>
        </InfiniteScroll>
      )}
    </GridContainer>
  );
}

PokemonList.propTypes = {
  list: PropTypes.array.isRequired,
};

PokemonList.defaultProps = {
  list: [],
};

export default PokemonList;
