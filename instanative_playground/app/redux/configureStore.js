import { createStore, combineReducers } from 'redux';

import globalReducer from "./globalReducer";

// reducerları tek ağaç altında topluyoruz
const reducers = combineReducers(
    {
        global : globalReducer
    }
);

// reducer ve middleware'lerimizi kullanarak bir store
// yaratıyoruz.
const store = createStore(reducers)

export default store;