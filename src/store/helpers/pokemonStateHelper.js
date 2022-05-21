export const setPokemonData = (pokemon) => {
    return {
        name: pokemon?.name,
        abilities: pokemon?.abilities,
        experience: pokemon?.base_experience,
        height: pokemon?.height,
        id: pokemon?.id,
        moves: pokemon?.moves,
        image: pokemon?.sprites?.other?.home?.front_default,
        shinyImage: pokemon?.sprites?.other?.home?.front_shiny,
        stats: pokemon?.stats,
        weight: pokemon?.weight
    }
}

export const resetPokemonData = {
    pokemons: [],
    next: false,
    count: null
}

export const resetPokemonDetailModal = {
    show: false,
    pokemon: null
}