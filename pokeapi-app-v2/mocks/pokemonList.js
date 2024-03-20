const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

function getPokemonSprite(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
}

const pokemonList = [
  { name: "Bulbasaur", id: 1, sprite: getPokemonSprite(1) },
  { name: "Charmander", id: 4, sprite: getPokemonSprite(4) },
  { name: "Charizard", id: 6, sprite: getPokemonSprite(6) },
  { name: "Squirtle", id: 7, sprite: getPokemonSprite(7) },
  { name: "Pikachu", id: 25, sprite: getPokemonSprite(25) },
  { name: "Jigglypuff", id: 39, sprite: getPokemonSprite(39) },
  { name: "Eevee", id: 133, sprite: getPokemonSprite(133) },
  { name: "Mew", id: 151, sprite: getPokemonSprite(151) },
  { name: "Chikorita", id: 152, sprite: getPokemonSprite(152) },
  { name: "Cyndaquil", id: 155, sprite: getPokemonSprite(155) },
  { name: "Totodile", id: 158, sprite: getPokemonSprite(158) },
  { name: "Pichu", id: 172, sprite: getPokemonSprite(172) },
  { name: "Togepi", id: 175, sprite: getPokemonSprite(175) },
  { name: "Mareep", id: 179, sprite: getPokemonSprite(179) },
  { name: "Bellossom", id: 182, sprite: getPokemonSprite(182) },
  { name: "Marill", id: 183, sprite: getPokemonSprite(183) },
  { name: "Hoppip", id: 187, sprite: getPokemonSprite(187) },
  { name: "Sunkern", id: 191, sprite: getPokemonSprite(191) },
  { name: "Unown", id: 201, sprite: getPokemonSprite(201) },
];

export default pokemonList;
