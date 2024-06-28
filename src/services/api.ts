import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://pokeapi.co/api/v2/'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => ({
        url: 'pokemon?limit=10000'
      })
    })
  })
})

export const { useGetPokemonQuery } = api

export default api
