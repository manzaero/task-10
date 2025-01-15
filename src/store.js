import {applyMiddleware, combineReducers, createStore} from "redux";
import {useReducer} from "./reducer.js";
import {thunk} from "redux-thunk";

const reducer = combineReducers({
    stateGame: useReducer,
})

export const store = createStore(reducer, applyMiddleware(thunk))

