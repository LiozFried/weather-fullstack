import { createSlice } from '@reduxjs/toolkit'

/**
 * Each place has an id (for React keys and updates) and a name (e.g. "Jerusalem", "Rome").
 * We can add more fields later (e.g. country, coordinates for the weather API).
 */
const initialState = {
  items: [],
}

const placesSlice = createSlice({
  name: 'places',
  initialState,
  reducers: {
    addPlace(state, action) {
      // action.payload: { id, name } or just { name } (we can generate id here)
      const place = action.payload
      const id = place.id ?? crypto.randomUUID()
      state.items.push({ id, name: place.name })
    },
    removePlace(state, action) {
      // action.payload: place id (string)
      state.items = state.items.filter((p) => p.id !== action.payload)
    },
    updatePlace(state, action) {
      // action.payload: { id, name }
      const { id, name } = action.payload
      const found = state.items.find((p) => p.id === id)
      if (found) found.name = name
    },
    setPlaces(state, action) {
      // action.payload: array of { id, name } (e.g. after loading from the backend)
      state.items = action.payload
    },
  },
})

export const { addPlace, removePlace, updatePlace, setPlaces } = placesSlice.actions
export default placesSlice.reducer
