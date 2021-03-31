import React from "react";

const todoForm = ({todoItems, inputText, setTodoItems, setInputText}) => {

    const textInputHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoFormHandler = (e) => {
        e.preventDefault();
        setTodoItems([...todoItems, {
            id: Math.random(),
            text: inputText,
            complete: false
        }])
        setInputText("")
    }

    return (
        <form>
            <input type="text" className="todo-input" onChange={textInputHandler}/>
            <button onClick={submitTodoFormHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default todoForm
