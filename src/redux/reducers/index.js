import { combineReducers } from "redux"
import filterReducer from "./filter"
import pizzasReducer from "./pizzas"

export const rootReducer = combineReducers({
    filter: filterReducer,
    pizzas: pizzasReducer
})