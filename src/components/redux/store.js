import { configureStore } from '@reduxjs/toolkit'
import weatherApiSlice from './slice/weatherApiSlice'

export default configureStore({
  reducer: {
    api:weatherApiSlice
  },
  
})