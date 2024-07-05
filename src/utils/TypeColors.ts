import { Colors } from '../styles/Cores'

const typeColors: { [key: string]: string } = {
  normal: Colors.normal,
  fire: Colors.fire,
  water: Colors.water,
  electric: Colors.electric,
  grass: Colors.grass,
  ice: Colors.ice,
  fighting: Colors.fighting,
  poison: Colors.poison,
  ground: Colors.ground,
  flying: Colors.flying,
  psychic: Colors.psychic,
  bug: Colors.bug,
  rock: Colors.rock,
  ghost: Colors.ghost,
  dragon: Colors.dragon,
  dark: Colors.dark,
  steel: Colors.steel,
  fairy: Colors.fairy
}

export const getColorByType = (type: string): string =>
  typeColors[type] || Colors.normal
