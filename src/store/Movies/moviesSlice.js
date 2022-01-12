import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    arrayMovies: []
}

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        getMovies: (state, action) => {
            state.arrayMovies = action.payload
        },
    }
})

export const {getMovies} = moviesSlice.actions;
export default moviesSlice.reducer;
