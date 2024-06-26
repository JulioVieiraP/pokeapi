import styled from 'styled-components'
import { Colors } from '../../styles/Cores'
import { SubTitle3 } from '../../styles/Typography'

export const typeColors: { [key: string]: string } = {
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

export const Tag = styled.span<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  color: white;
  max-width: 59px;
  width: 100%;
  height: 20px;
  padding: 2px 8px;
  border-radius: 10px;
  font-weight: ${SubTitle3.fontWeight};
  font-size: ${SubTitle3.fontSize};
  line-height: ${SubTitle3.lineHeight};
`
