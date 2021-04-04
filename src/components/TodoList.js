import React, {useEffect, useCallback} from "react";
import Todo from "./Todo";
import {TODO_STATUS_ENUM} from "../constants/Todo";
import {useSelector} from "react-redux";

const TodoList = ({filterSelect}) => {
    let todos = useSelector(state => state.todos);
    let filteredTodos = [];

    const filteredTodosHandler = useCallback(() => {
        switch (filterSelect) {
            case TODO_STATUS_ENUM.COMPLETED:
                filteredTodos = todos.filter((todo) => todo.completed === true)
                break;
            case TODO_STATUS_ENUM.INCOMPLETE:
                filteredTodos = todos.filter((todo) => todo.completed === false)
                break;
            default:
                filteredTodos = [...todos]
                break;
        }
        return filteredTodos
    },[filterSelect,filteredTodos])

    //Run hook when [filterSelect, filteredTodosHandler] filterSelect changed ..
    useEffect(function () {
        filteredTodosHandler()
    }, [filterSelect, filteredTodosHandler])

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodosHandler().map((todo, index) => <Todo key={index} todo={todo}/>)}
            </ul>
        </div>
    )
}

export default TodoList
