import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getPokemonImageUrl } from '../utils/pokemonUtils'

const POKEMON_API_URL = 'https://pokeapi.co/api/v2/'

// Tipo para representar um Pokémon retornado pela API
interface Pokemon {
  id: number
  name: string
  url: string
  imageUrl: string
}

// Tipo para representar os detalhes de um Pokémon
interface PokemonDetails {
  id: number
  name: string
  height: number
  weight: number
  abilities: {
    ability: {
      name: string
      url: string
    }
    is_hidden: boolean
    slot: number
  }[]
  sprites: {
    front_default: string
    front_shiny: string
  }
  types: {
    slot: number
    type: {
      name: string
      url: string
    }
  }[]
  moves: {
    move: {
      name: string
    }
  }[]
  stats: {
    base_stat: number
    effort: number
    stat: {
      name: string
      url: string
    }
  }[]
  description: string
}

// Tipo para representar as informações de espécie de um Pokémon
interface PokemonSpecies {
  flavor_text_entries: {
    flavor_text: string
  }[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: POKEMON_API_URL
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<Pokemon[], void>({
      query: () => 'pokemon?limit=10000',
      transformResponse: (response: {
        results: { name: string; url: string }[]
      }) => {
        const pokemonList: Pokemon[] = response.results.map(
          (pokemonData, index) => ({
            id: index + 1,
            name: pokemonData.name,
            url: pokemonData.url,
            imageUrl: getPokemonImageUrl(index + 1)
          })
        )
        return pokemonList
      }
    }),

    getPokemonById: builder.query<PokemonDetails, string>({
      query: (id) => `pokemon/${id}`,
      transformResponse: (response: PokemonDetails) => ({
        id: response.id,
        name: response.name,
        height: response.height,
        weight: response.weight,
        abilities: response.abilities,
        sprites: response.sprites,
        types: response.types,
        moves: response.moves,
        stats: response.stats,
        description: '',
        imageUrl: getPokemonImageUrl(response.id)
      })
    }),

    getPokemonSpeciesById: builder.query<PokemonSpecies, string>({
      query: (id) => `pokemon-species/${id}`
    })
  })
})

export const {
  useGetPokemonQuery,
  useGetPokemonByIdQuery,
  useGetPokemonSpeciesByIdQuery
} = api

export default api
