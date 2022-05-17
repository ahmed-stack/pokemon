import each from "lodash/each";
import replace from "lodash/replace";

// Local Imports
import POKEMON_ROUTES from "api/apiRoutes/pokemonRoutes";

const ROUTES_OBJ = { ...POKEMON_ROUTES };

/**
 * getRoute creates the URL through provided routeName & params arguments
 * @param  {string} routeName   any object name of ROUTES_OBJ e.g. user-authentication
 * @param  {Object} [params={}] param values replace with strings present <...>.
 * @return {string}             URL
 */

const getRoute = (routeName, params = {}) => {
  let url = ROUTES_OBJ[routeName];
  each(params, (val, key) => {
    const paramVal = Array.isArray(val) ? val.join(",") : val;
    url = replace(
      url,
      new RegExp(`<${key}>`, "g"),
      encodeURIComponent(paramVal)
    );
    if (
      typeof paramVal === "undefined" ||
      paramVal === "" ||
      paramVal === null
    ) {
      url = url
        .replace(new RegExp(`${key}=`, "g"), "")
        .replace("undefined", "")
        .replace("null", "");
    }
  });
  return url;
};

export default getRoute;
