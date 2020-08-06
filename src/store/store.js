import {createStore, combineReducers} from"redux";
import todo from "../reducers/index";
import loading from "../reducers/loading";

let store = createStore(combineReducers(todo,loading));
export default store;

