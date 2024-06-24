import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = 'https://fake-api-tau.vercel.app/api/efood/'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints: (builder) => ({
    getPokemon: builder.query({
      query: () => ({
        url: 'restaurantes'
      })
    })
  })
})

export const { useGetPokemonQuery } = api

export default api
