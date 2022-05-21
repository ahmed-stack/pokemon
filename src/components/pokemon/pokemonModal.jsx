import React from "react";
import { useDispatch, useSelector } from "react-redux";

// Component Imports
import { PokemonDetail } from "components/pokemon";
import CustomModal from "components/modal/modal";

// Local Imports
import { setPokemonDetailModalState } from "store/reducers/pokemonReducer";
import { getPokemonDetailModalState } from "store/selectors/pokemonSelector";
import { resetPokemonDetailModal } from "store/helpers/pokemonStateHelper";

function PokemonModal() {
  const dispatch = useDispatch();

  const pokemonDetailModal = useSelector(getPokemonDetailModalState);

  const { show, pokemon } = pokemonDetailModal;

  const hideHandler = () => {
    dispatch(setPokemonDetailModalState(resetPokemonDetailModal));
  };

  return (
    <CustomModal show={show} size="lg" hideHandler={hideHandler}>
      <PokemonDetail pokemon={pokemon} />
    </CustomModal>
  );
}

export default PokemonModal;
