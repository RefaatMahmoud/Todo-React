import React from "react";
import {ADD_TODO} from '../actions/TodosActions';

import {useDispatch,useSelector} from "react-redux";

const todoForm = ({inputText, setInputText,setFilterSelect}) => {

    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const textInputHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoFormHandler = (e) => {
        e.preventDefault();
        dispatch(ADD_TODO({
            id: todos.length,
            text: inputText,
            completed: false
        }))
        setInputText("")
    }

    const filterSelectHandler = (e) => {
        setFilterSelect(e.target.value)
    }

    return (
        <form>
            <input type="text" className="todo-input" value={inputText} onChange={textInputHandler}/>
            <button onClick={submitTodoFormHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={filterSelectHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">incompleted</option>
                </select>
            </div>
        </form>
    );
}

export default todoForm
