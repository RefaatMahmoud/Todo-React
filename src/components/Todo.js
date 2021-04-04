import React from "react";
import {useDispatch} from "react-redux";
import {DELETE_TODO, TOGGLE_TODO_STATUS} from '../actions/TodosActions'

const Todo = ({todo}) => {
    const dispatch = useDispatch();
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>{todo.text}</li>
            <button className='complete-btn' onClick={() => dispatch(TOGGLE_TODO_STATUS(todo.id))}>
                <i className='fas fa-check'></i>
            </button>
            <button className='trash-btn' onClick={() => dispatch(DELETE_TODO(todo.id))}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default Todo
