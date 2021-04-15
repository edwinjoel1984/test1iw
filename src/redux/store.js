import { createStore, combineReducers, compose, applyMiddleware } from "redux";

import posts from "./posts/posts.reducer";

import thunk from "redux-thunk";

let rootReduce = combineReducers({
    posts,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    let store = createStore(rootReduce, composeEnhancers(applyMiddleware(thunk)));    
    return store;
}
