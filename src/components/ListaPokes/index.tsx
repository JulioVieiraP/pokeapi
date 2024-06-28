import { useGetPokemonQuery } from '../../services/api'
import Card from '../Card'
import * as S from './styles'
import { getPokemonImageUrl } from '../../utils/pokemonUtils'

const ListaPokes = () => {
  const { data, isLoading, isError } = useGetPokemonQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error :(</p>

  return (
    <S.Main>
      <S.Content className="container">
        {data?.map((pokemon) => (
          <Card
            key={pokemon.name}
            image={getPokemonImageUrl(pokemon.id)}
            name={pokemon.name}
            id={pokemon.id.toString()}
          />
        ))}
      </S.Content>
    </S.Main>
  )
}

export default ListaPokes
