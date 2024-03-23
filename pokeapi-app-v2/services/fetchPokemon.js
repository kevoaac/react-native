export const fetchPokemon = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemon = await response.json();

    const spritesList = Object.keys(pokemon.sprites)
      .map((key) => {
        if (key === "back_default") return pokemon.sprites[key];
        if (key === "back_shiny") return pokemon.sprites[key];
        if (key === "front_default") return pokemon.sprites[key];
        if (key === "front_shiny") return pokemon.sprites[key];
      })
      .filter((value) => value !== undefined);

    return {
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon.sprites.front_default,
      homeSprite: pokemon.sprites.other?.home?.front_default,
      spritesList: spritesList,
      stats: pokemon.stats,
    };
  } catch (error) {
    console.error(error);
    return null;
  }
};

const INITIAL_URL = "https://pokeapi.co/api/v2/pokemon";
export const fetchPokemonList = async (nextURL) => {
  const response = await fetch(nextURL ? nextURL : INITIAL_URL);
  const data = await response.json();

  const newPokemonList = await Promise.all(
    data.results.map(async (pokemon) => {
      const response2 = await fetch(pokemon.url);
      const pokemonDetail = await response2.json();

      return {
        id: pokemonDetail.id,
        name: pokemon.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonDetail.id}.png`,
      };
    })
  );

  return { newPokemonList, next: data.next };
};
