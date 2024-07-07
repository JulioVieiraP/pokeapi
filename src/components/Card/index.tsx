import { formatId } from '../../utils/pokemonUtils'
import PokeImg from '../PokeImg'

import * as S from './styles'

type Props = {
  id: number
  name: string
  image: string
}

const Card = ({ image, name, id }: Props) => {
  return (
    <S.Card to={`pokemon/`}>
      <S.Number>{formatId(id)}</S.Number>
      <PokeImg src={image} width="pequeno" />
      <S.Title>{name}</S.Title>
    </S.Card>
  )
}

export default Card
