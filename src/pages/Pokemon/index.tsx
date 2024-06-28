import { useGetPokemonByIdQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import { formatId, getPokemonImageUrl } from '../../utils/pokemonUtils'
import PokeImg from '../../components/PokeImg'

const Pokemon = () => {
  const { id } = useParams<{ id: string }>()
  const { data: pokemon } = useGetPokemonByIdQuery(id || '')

  if (!pokemon) return null

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <PokeImg src={getPokemonImageUrl(pokemon.id)} width="grande" />
      <p>ID: {formatId(pokemon.id)}</p>
    </div>
  )
}

export default Pokemon
