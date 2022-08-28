import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { reducer1 } from "./reducer1";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        reducer1: reducer1
    }),
    composeEnhancers(applyMiddleware())
);