const SPRITES_BASE_URL =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'

export const getPokemonImageUrl = (id: number): string => {
  return `${SPRITES_BASE_URL}${id}.png`
}

export const formatId = (id: number): string => {
  return `#${id.toString().padStart(3, '0')}`
}

export const formatNumber = (num: number) => {
  return (num / 10).toString().replace('.', ',')
}
