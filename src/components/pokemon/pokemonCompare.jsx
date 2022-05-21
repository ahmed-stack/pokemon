import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Local Imports
import { getPokemonCompareModalState } from "store/selectors/pokemonSelector";
import { setCompareModalDetails } from "store/reducers/pokemonReducer";

// Component Imports
import { PokemonDetail } from "components/pokemon";
import CustomModal from "components/modal/modal";

// Style Imports
import { CompareWrapper } from "styles/compare";

function PokemonCompare() {
  const dispatch = useDispatch();

  const comparePokemon = useSelector(getPokemonCompareModalState);

  const { show, pokemon1, pokemon2 } = comparePokemon;

  const hideHandler = () => {
    dispatch(
      setCompareModalDetails({ show: false, pokemon1: null, pokemon2: null })
    );
  };

  return (
    <CustomModal
      show={show}
      size="lg"
      fullscreen={true}
      hideHandler={hideHandler}
    >
      <CompareWrapper data-testid="pokemon-compare">
        <div className="compare-container">
          <PokemonDetail pokemon={pokemon1} />
        </div>
        <div className="compare-container">
          <PokemonDetail pokemon={pokemon2} />
        </div>
      </CompareWrapper>
    </CustomModal>
  );
}

export default PokemonCompare;
