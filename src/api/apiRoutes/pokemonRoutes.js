const BASE_URL = `https://pokemonapi-env-1.eba-q6pph3mq.us-east-1.elasticbeanstalk.com`;

const POKEMON_ROUTES = {
    getPokemons: `${BASE_URL}/getPokemons/`,
    getPokemonDetails: `${BASE_URL}/getPokemonDetails/<pokemon>/`,
    getGenerations: `${BASE_URL}/getPokemonGenerations/`
  };
  
  export default POKEMON_ROUTES;
