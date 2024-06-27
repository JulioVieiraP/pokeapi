import PokeImg from '../PokeImg'
import PokeImage from '../../Assets/images/image.png'

import * as S from './styles'

const Card = () => {
  return (
    <S.Card>
      <S.Number>#999</S.Number>
      <PokeImg src={PokeImage} width="pequeno" />
      <S.Title>Name</S.Title>
    </S.Card>
  )
}

export default Card
