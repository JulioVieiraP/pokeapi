import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import api from '../services/api'
import searchReducer from './Features/searchSlice'

const store = configureStore({
  reducer: {
    search: searchReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware, logger)
})

export type RootState = ReturnType<typeof store.getState>

export default store
