const BASE_URL = process.env.REACT_APP_POKEMON_API_BASE_URL;

const POKEMON_ROUTES = {
    getPokemons: `${BASE_URL}/getPokemons/`,
    getPokemonDetails: `${BASE_URL}/getPokemonDetails/<pokemon>/`,
    getGenerations: `${BASE_URL}/getPokemonGenerations/`
  };
  
  export default POKEMON_ROUTES;
