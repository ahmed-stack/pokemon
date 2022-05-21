const {
  getAllPokemons,
  getPokemonDetails,
  getAllGenerations,
  getPokemonByGeneration,
} = require("./mockResponse");

module.exports = {
  get: jest.fn((url) => {
    switch (url) {
      case "https://pokeapi.co/api/v2/pokemon/":
        return Promise.resolve({ data: getAllPokemons, status: 200 });

      case "https://pokeapi.co/api/v2/pokemon/pikachu/":
        return Promise.resolve({ data: getPokemonDetails(1, "pikachu"), status: 200 });

      case "https://pokeapi.co/api/v2/pokemon/charizard/":
        return Promise.resolve({ data: getPokemonDetails(2, "charizard"), status: 200 });

      case "https://pokeapi.co/api/v2/pokemon/bulbasaur/":
        return Promise.resolve({ data: getPokemonDetails(3, "balbasaur"), status: 200 });

      case "https://pokeapi.co/api/v2/generation/":
        return Promise.resolve({ data: getAllGenerations, status: 200 });

      case "https://pokeapi.co/api/v2/generation/1/":
        return Promise.resolve({ data: getPokemonByGeneration, status: 200 });
    }
  }),
};
