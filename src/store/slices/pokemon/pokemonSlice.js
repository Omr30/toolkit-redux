import { createSlice } from '@reduxjs/toolkit'
export const pokemonSlice = createSlice({
  name: 'name',
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  reducers: {
    startLoadingPokemons: (state /* action */) => {
      state.isLoading = true
    },
    setPokemons: (state, action) => {
      console.log(action)
    },
  },
})
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions
