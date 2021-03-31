import {useState,useEffect} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('')
    const [todoItems, setTodoItems] = useState([]);
    const [filterSelect,setFilterSelect] = useState('all')

    const saveTodosLocalStorage = () => {
        localStorage.setItem('todos',JSON.stringify(todoItems))
    }

    const getTodosLocalStorage = () => {
        const todos = JSON.parse(localStorage.getItem('todos'))
        setTodoItems(todos)
    }

    useEffect(()=>{
        getTodosLocalStorage()
    },[])

    useEffect(()=>{
        saveTodosLocalStorage()
    },[todoItems])

    return (
        <div className="App">
            <header>Todo List</header>
            <TodoForm todoItems={todoItems}
                      inputText={inputText}
                      setTodoItems={setTodoItems}
                      setInputText={setInputText}
                      filterSelect={filterSelect}
                      setFilterSelect={setFilterSelect}
            />
            <TodoList setTodoItems={setTodoItems}
                      todoItems={todoItems}
                      filterSelect={filterSelect}
            />
        </div>
    );
}

export default App;
