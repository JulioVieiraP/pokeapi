import { useGetPokemonByIdQuery } from '../../services/api'
import { useParams } from 'react-router-dom'
import { getPokemonImageUrl } from '../../utils/pokemonUtils'

const Pokemon = () => {
  const { id } = useParams<{ id: string }>()
  const { data: pokemon } = useGetPokemonByIdQuery(id || '')

  if (!pokemon) return null

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={getPokemonImageUrl(pokemon.id)} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <p>URL: {pokemon.sprites.front_default}</p>
    </div>
  )
}

export default Pokemon
