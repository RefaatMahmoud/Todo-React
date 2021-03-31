import React,{useState,useEffect} from "react";
import Todo from "./Todo";

const TodoList = ({todoItems,setTodoItems,filterSelect}) => {

    const [filteredTodos,setFilteredTodos] = useState([])

    const filteredTodosHandler = () => {
        switch (filterSelect){
            case 'completed':
                setFilteredTodos(todoItems.filter((todo) => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(todoItems.filter((todo) => todo.completed === false))
                break;
            default:
                setFilteredTodos(todoItems)
                break;
        }
    }

    //Run hook when todoItems or filterSelect changed ..
    useEffect(function (){
         filteredTodosHandler()
    },[todoItems,filterSelect])

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map((todo,index) => <Todo todoItems={todoItems} setTodoItems={setTodoItems} key={index} todo={todo}/>)}
            </ul>
        </div>
    )
}

export default TodoList
