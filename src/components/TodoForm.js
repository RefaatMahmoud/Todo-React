import React from "react";

const todoForm = ({todoItems, inputText, setTodoItems, setInputText,filterSelect,setFilterSelect}) => {

    const textInputHandler = (e) => {
        setInputText(e.target.value)
    }

    const submitTodoFormHandler = (e) => {
        e.preventDefault();
        setTodoItems([...todoItems, {
            id: todoItems.length,
            text: inputText,
            completed: false
        }])
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
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default todoForm
