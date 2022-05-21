import React, { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// Local Imports
import { getPokemonsAction } from "store/thunks/pokemonThunk";
import {
  getFavouritePokemons,
  getPokemons,
  getSearchedPokemon,
} from "store/selectors/pokemonSelector";

// Component Imports
import { PokemonList } from "components/pokemon";

function Pokemon() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemonsAction());
  }, [dispatch]);

  const { pathname } = useLocation();

  const searchedPokemon = useSelector(getSearchedPokemon);
  const pokemons = useSelector(getPokemons);
  const favouritePokemons = useSelector(getFavouritePokemons);

  // This function will return a list of pokemons based on the route and search parameters
  const getList = useMemo(() => {
    return !!searchedPokemon.length
      ? pathname === "/favourites"
        ? favouritePokemons.filter((pok) => {
            return searchedPokemon.find((searchPok) => searchPok.id === pok.id);
          })
        : searchedPokemon
      : pathname === "/favourites"
      ? favouritePokemons
      : pokemons;
  }, [pathname, searchedPokemon, favouritePokemons, pokemons]);

  return (
    <React.Fragment>
      <PokemonList list={getList} />
    </React.Fragment>
  );
}

export default Pokemon;
