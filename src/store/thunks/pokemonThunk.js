// Local Imports
import PokemonApi from "api/apiHandlers/pokemonHandler";
import { batch } from "react-redux";
import { updateLoadingStatus } from "store/reducers/appReducer";
import {
  fetchedGenerations,
  fetchedPokemons,
  setCompareModalDetails,
  setSearchedError,
  setSearchedPokemon,
} from "store/reducers/pokemonReducer";
import { setPokemonData } from "store/helpers/pokemonStateHelper";

export function getPokemonsAction(route) {
  return async (dispatch, getState) => {
    const { pokemons } = getState().pokemon;
    dispatch(updateLoadingStatus(true));
    try {
      let data = await PokemonApi.getPokemonsAPI(route);
      let newPokemons = [];
      await Promise.allSettled(
        data.results.map((pokemon) => {
          return new Promise(async (resolve, reject) => {
            try {
              const res = await PokemonApi.getPokemonDetailsAPI(pokemon.name);
              newPokemons.push(setPokemonData(res));
              resolve();
            } catch (e) {
              reject();
            }
          });
        })
      );
      batch(() => {
        dispatch(
          fetchedPokemons({
            pokemons: [...pokemons, ...newPokemons],
            next: data.next,
            count: data.count,
          })
        );
        dispatch(setSearchedError(null));
      });
      dispatch(updateLoadingStatus(false));
    } catch (e) {
      dispatch(updateLoadingStatus(false));
    }
  };
}

export function searchPokemon(pokemon) {
  return async (dispatch) => {
    dispatch(updateLoadingStatus(true));
    try {
      const pokemonDetails = await PokemonApi.getPokemonDetailsAPI(pokemon);

      batch(() => {
        dispatch(setSearchedPokemon([setPokemonData(pokemonDetails)]));
        dispatch(setSearchedError(null));
        dispatch(updateLoadingStatus(false));
      });
    } catch (e) {
      batch(() => {
        dispatch(setSearchedPokemon([]));
        dispatch(setSearchedError("No Pokemon Found"));
        dispatch(updateLoadingStatus(false));
      });
    }
  };
}

export function getGenertaionsAction() {
  return async (dispatch) => {
    try {
      const generations = await PokemonApi.getGenerations();
      dispatch(fetchedGenerations(generations.results));
    } catch (e) {}
  };
}

export function getPokemonsByGeneration(route) {
  return async (dispatch) => {
    dispatch(updateLoadingStatus(true));
    try {
      const pokemonsByGenerations = await PokemonApi.getPokemonsAPI(route);
      let newPokemons = [];
      await Promise.allSettled(
        pokemonsByGenerations.pokemon_species.map((pokemon) => {
          return new Promise(async (resolve, reject) => {
            try {
              const res = await PokemonApi.getPokemonDetailsAPI(pokemon.name);
              newPokemons.push(setPokemonData(res));
              resolve();
            } catch (e) {
              reject();
            }
          });
        })
      );
      dispatch(
        fetchedPokemons({
          pokemons: newPokemons,
          next: false,
          count: newPokemons.length,
        })
      );
      dispatch(updateLoadingStatus(false));
    } catch (e) {
      dispatch(updateLoadingStatus(false));
    }
  };
}

export function comparePokemonAction(pokemon) {
  return async (dispatch, getState) => {
    const { comparePokemon } = getState().pokemon;
    try {
      if (!comparePokemon.pokemon1) {
        dispatch(
          setCompareModalDetails({
            ...comparePokemon,
            pokemon1: pokemon,
          })
        );
      } else {
        dispatch(
          setCompareModalDetails({
            ...comparePokemon,
            show: true,
            pokemon2: pokemon,
          })
        );
      }
    } catch (e) {}
  };
}
