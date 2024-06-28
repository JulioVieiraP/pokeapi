import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://pokeapi.co/api/v2/'

interface Pokemon {
  id: string
  name: string
  url: string
  imageUrl: string
}

interface PokemonResponse {
  results: Pokemon[]
}

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query<PokemonResponse, void>({
      query: () => ({
        url: 'pokemon?limit=10000'
      }),
      transformResponse: (response: {
        results: { name: string; url: string }[]
      }) => {
        const results = response.results.map((item, index) => {
          const id = (index + 1).toString().padStart(3, '0')
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
          return { ...item, id, imageUrl }
        })
        return { results }
      }
    })
  })
})

export const { useGetPokemonQuery } = api

export default api
