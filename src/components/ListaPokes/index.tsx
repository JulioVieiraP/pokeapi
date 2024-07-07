import { useGetPokemonQuery } from '../../services/api'
import Card from '../Card'
import * as S from './styles'
import { getPokemonImageUrl } from '../../utils/pokemonUtils'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const ListaPokes = () => {
  const { data, isLoading, isError } = useGetPokemonQuery()
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm)

  const filteredPokemon = data?.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm)
  )

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error :(</p>

  return (
    <S.Main>
      <S.Content className="container">
        {filteredPokemon?.map((pokemon) => (
          <Card
            key={pokemon.name}
            image={getPokemonImageUrl(pokemon.id)}
            name={pokemon.name}
            id={pokemon.id}
          />
        ))}
      </S.Content>
    </S.Main>
  )
}

export default ListaPokes
