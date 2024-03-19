import { configureStore } from '@reduxjs/toolkit'
import calcSlice from './calcSlice.js'

export default configureStore({
    reducer: {
        calc: calcSlice,
    }
})