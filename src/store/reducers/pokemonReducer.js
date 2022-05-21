import { createSlice } from "@reduxjs/toolkit";

const initialPokemonState = {
  pokemons: [],
  next: null,
  count: null,
  generations: [],
  favourites: [],
  searchedPokemon: [],
  searchedError: null,
  pokemonDetailModal: {
    show: false,
    pokemon: null,
  },
  comparePokemon: {
    showCompareModal: false,
    pokemon1: null,
    pokemon2: null,
  },
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialPokemonState,
  reducers: {
    fetchedPokemons: (state, { payload }) => {
      state.pokemons = payload.pokemons;
      state.next = payload.next;
      state.count = payload.count;
    },

    fetchedGenerations: (state, { payload }) => {
      state.generations = payload;
    },

    addToFavourites: (state, { payload }) => {
      state.favourites = [...state.favourites, payload];
    },

    removeFromFavourite: (state, { payload }) => {
      state.favourites = state.favourites.filter(
        (pok) => pok.id !== payload.id
      );
    },

    setSearchedPokemon: (state, { payload }) => {
      state.searchedPokemon = payload;
    },

    setSearchedError: (state, { payload }) => {
      state.searchedError = payload;
    },

    setPokemonDetailModalState: (state, { payload }) => {
      state.pokemonDetailModal = payload;
    },

    setCompareModalDetails: (state, { payload }) => {
      state.comparePokemon = payload;
    },
  },
});

export const { reducer } = pokemonSlice;
export const {
  fetchedPokemons,
  fetchedGenerations,
  addToFavourites,
  removeFromFavourite,
  setSearchedPokemon,
  setSearchedError,
  setPokemonDetailModalState,
  setCompareModalDetails,
} = pokemonSlice.actions;
