import PokeImg from '../PokeImg'

import * as S from './styles'

type Props = {
  id: string
  name: string
  image: string
}

const Card = ({ image, name, id }: Props) => {
  return (
    <S.Card to={`pokemon/${id}`}>
      <S.Number>#{id}</S.Number>
      <PokeImg src={image} width="pequeno" />
      <S.Title>{name}</S.Title>
    </S.Card>
  )
}

export default Card
