/**
 * Redux store module
 * Contains the redux store reducers
 *
 * @author Andreas Lillje <a.lillje@gmail.com>
 */

import { configureStore } from '@reduxjs/toolkit'
import sidemenuReducer from './reducers/sidemenu'

const store = configureStore({
  reducer: {
    sidemenu: sidemenuReducer
  }
})

export default store
