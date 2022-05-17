const BASE_URL = `https://pokeapi.co/api/v2`;

const POKEMON_ROUTES = {
  getPokemons: `${BASE_URL}/pokemon/`,
  getPokemonDetails: `${BASE_URL}/pokemon/<pokemon>/`,
  getGenerations: `${BASE_URL}/generation/`,
};

export default POKEMON_ROUTES;
