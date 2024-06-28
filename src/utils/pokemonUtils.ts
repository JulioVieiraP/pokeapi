const SPRITES_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

export const getPokemonImageUrl = (id: number): string => {
  return `${SPRITES_BASE_URL}${id}.png`
}
