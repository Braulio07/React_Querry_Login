import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    valor:0
}


const counterSlice = createSlice({
    name: 'counterSlice',
    initialState,
    reducers: {
        increment:(state)=>{
            state.valor +=1
        },
        decrement:(state)=>{
            state.valor -=1
        },
        resetCero:(state, action)=>{
            state.valor = action.payload
        }
    }
})


export const {increment, decrement, resetCero} = counterSlice.actions;
export default counterSlice.reducer;
