import { createSlice } from '@reduxjs/toolkit'

// Create a user slice with different actions
export const sidemenuSlice = createSlice({
  name: 'sidemenu',
  initialState: {
    show: false
  },
  reducers: {
    /**
     *
     * @param state
     * @param action
     */
    showSidemenu: (state, action) => {
      state.show = true
    },
    /**
     *
     * @param state
     */
    hideSidemenu: (state) => {
      state.show = false
    }
  }
})

export const { showSidemenu, hideSidemenu } = sidemenuSlice.actions
export default sidemenuSlice.reducer
