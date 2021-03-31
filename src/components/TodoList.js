import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                <TodoItem/>
            </ul>
        </div>
    )
}

export default TodoList
