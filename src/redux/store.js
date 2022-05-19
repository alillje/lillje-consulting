import { configureStore } from '@reduxjs/toolkit'
import sidemenuReducer from './reducers/sidemenu'

// Create a new store that stores all reducers
const store = configureStore({
  reducer: {
    sidemenu: sidemenuReducer
  }
})

export default store
