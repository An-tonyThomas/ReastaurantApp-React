import { createStore,combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restuarantListReducers } from "./reducers/restuarantReducers";

const reducers=combineReducers({
    restuarantReducer:restuarantListReducers
})

const middleware=[thunk]

const store=createStore(reducers,applyMiddleware(...middleware))

export default store