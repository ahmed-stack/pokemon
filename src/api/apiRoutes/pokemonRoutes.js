const BASE_URL = process.env.REACT_APP_POKEMON_API_BASE_URL;

const POKEMON_ROUTES = {
    getPokemons: `${BASE_URL}/pokemon`,
    getPokemonDetails: `${BASE_URL}/pokemon/<pokemon>`,
    getGenerations: `${BASE_URL}/generation`
  };
  
  export default POKEMON_ROUTES;
