import Card from '../Card'
import * as S from './styles'

const ListaPokes = () => {
  return (
    <S.Main>
      <S.Content className="container">
        <Card />
        <Card />
        <Card />
      </S.Content>
    </S.Main>
  )
}

export default ListaPokes
