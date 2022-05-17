// Local Imports
import getRoute from "api/apiRoutes";
import { API } from "api/http";

class PokemonApi extends API {
  getPokemonsAPI = (requestedRoute) => {
    const route = !!requestedRoute ? requestedRoute : getRoute("getPokemons");
    return this.fetch(route);
  };

  getPokemonDetailsAPI = (pokemon) => {
    const route = getRoute("getPokemonDetails", { pokemon });
    return this.fetch(route);
  };

  getGenerations = () => {
    const route = getRoute("getGenerations");
    return this.fetch(route);
  };
}

export default new PokemonApi();
