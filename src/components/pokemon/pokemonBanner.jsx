import React, { useCallback, useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { batch, useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

// Local Imports
import {
  fetchedPokemons,
  setSearchedError,
  setSearchedPokemon,
} from "store/reducers/pokemonReducer";
import { getLoadingStatus } from "store/selectors/appSelector";
import { getGenerations } from "store/selectors/pokemonSelector";
import {
  getGenertaionsAction,
  getPokemonsAction,
  getPokemonsByGeneration,
  searchPokemon,
} from "store/thunks/pokemonThunk";
import { resetPokemonData } from "store/helpers/pokemonStateHelper";

// Style Imports
import { BannerContainer, FilterWrapper, LinkWrapper } from "styles/banner";

// Component Imports
import { SelectInput, TextInput } from "components/input";
import { useEffect } from "react";

function PokemonBanner() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenertaionsAction());
  }, [dispatch]);

  const generations = useSelector(getGenerations);
  const loading = useSelector(getLoadingStatus);

  const { pathname } = useLocation();

  const selectChangeHandler = (value) => {
    value !== "all"
      ? dispatch(getPokemonsByGeneration(value))
      : batch(() => {
          dispatch(fetchedPokemons(resetPokemonData));
          dispatch(getPokemonsAction());
        });
  };

  const debouncedChangeHandler = useMemo(
    () =>
      debounce((value) => {
        !!value 
          ? dispatch(searchPokemon(value))
          : batch(() => {
              dispatch(setSearchedPokemon([]));
              dispatch(setSearchedError(null));
            });
      }, 600),
    [dispatch]
  );

  const textChangeHandler = useCallback(
    (value) => {
      debouncedChangeHandler(value);
    },
    [debouncedChangeHandler]
  );

  return (
    <BannerContainer>
      <h1>POKEMONS</h1>
      <FilterWrapper>
        <SelectInput
          placeholder="all generations"
          placeholderValue="all"
          options={generations.map((elem) => {
            return { label: elem.name, value: elem.url };
          })}
          changeHandler={(e) => selectChangeHandler(e.target.value)}
        />

        <TextInput
          placeholder="find pokemon"
          type="text"
          changeHandler={(e) => textChangeHandler(e.target.value)}
          disabled={!!loading}
        />
      </FilterWrapper>
      <LinkWrapper>
        {pathname !== "/favourites" ? (
          <Link to="/favourites">go to favourites</Link>
        ) : (
          <Link to="/">go back</Link>
        )}
      </LinkWrapper>
    </BannerContainer>
  );
}

export default PokemonBanner;
