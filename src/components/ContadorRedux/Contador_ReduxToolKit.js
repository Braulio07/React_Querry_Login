// CONTADOR DE PRUEBA PARA PROBAR EL FUNCIONAMIENTO DE REDUX TOOLKIT

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

// DISPATCHS
import { getMovies, insertMovies } from '../../store/Movies/moviesSlice';
import { increment, decrement, resetCero } from '../../store/Slice/counterSlice';



export const ContadorRedux = () => {

    // state.counter:  es el nombre del reducer
    const { valor } = useSelector(state => state.counterS);
    const dispatch = useDispatch();

    // +1
    const addValue = () => {
        dispatch(increment())
    }
    // -1
    const resValue = () => {
        dispatch(decrement())
    }
    // 0 
    const resetCeroFn = () => {
        dispatch(resetCero(0))
    }


    return (
        <div>

            <h1 style={{ color: 'white' }}> Valor: {valor}</h1>
            <br />
            <button onClick={() => addValue()}>ADD 1    + </button>   <br />  <br />
            <button onClick={() => resValue()}>REST 1   - </button>   <br />  <br />
            <button onClick={() => resetCeroFn()}>RESET 0 </button>   <br />  <br /><br />

        </div>
    )
}
