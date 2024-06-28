import { useGetPokemonQuery } from '../../services/api'
import Card from '../Card'
import * as S from './styles'

const ListaPokes = () => {
  const { data, isLoading, isError } = useGetPokemonQuery()

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error :(</p>

  return (
    <S.Main>
      <S.Content className="container">
        {data?.results.map((pokemon, index) => {
          const pokemonId = (index + 1).toString().padStart(3, '0')
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`

          return (
            <Card
              key={pokemon.name}
              image={imageUrl}
              name={pokemon.name}
              id={pokemonId}
            />
          )
        })}
      </S.Content>
    </S.Main>
  )
}

export default ListaPokes
