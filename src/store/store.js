
import moviesSlice from './Movies/moviesSlice'
import counterSlice from './Counter/counterSlice'
import { combineReducers, createStore } from 'redux';

// using redux-persist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = { 
    key: 'root',
    storage,
};

const authReducers = combineReducers({
    counterS: counterSlice,
});

const allReducers = combineReducers({
    auth: persistReducer(persistConfig, authReducers),
    moviesS: moviesSlice,
  })

let store = createStore(allReducers)
let persistor = persistStore(store)
export { store, persistor }
