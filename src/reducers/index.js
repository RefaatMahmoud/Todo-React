import TodoReducer from "./TodoReducer";
import {combineReducers} from 'redux';

const allReducers = combineReducers({todos: TodoReducer})

export default allReducers

