import { configureStore } from '@reduxjs/toolkit'
import placesReducer from './placesSlice.js'

/**
 * The Redux store. Right now it only has the "places" slice.
 * Later we can add more slices (e.g. filter, loading state) with combineReducers or more slices.
 */
export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
})
