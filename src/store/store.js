import {configureStore} from '@reduxjs/toolkit'
import moviesSlice from './Movies/moviesSlice'
import counterSlice from './Slice/counterSlice'

export const store = configureStore({
    reducer: {
        counterS: counterSlice,
        moviesS: moviesSlice
    }
})