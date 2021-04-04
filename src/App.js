import {useState, useEffect,useCallback} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState('')
    const [todoItems, setTodoItems] = useState([]);
    const [filterSelect, setFilterSelect] = useState('all')

    const saveTodosLocalStorage = useCallback(()=>{
        localStorage.setItem('todos', JSON.stringify(todoItems))
    },[todoItems])

    const getTodosLocalStorage = () => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos',JSON.stringify([]))
        }else{
            const todos = JSON.parse(localStorage.getItem('todos'))
            setTodoItems(todos)
        }
    }

    useEffect(() => {
        getTodosLocalStorage()
    }, [])

    useEffect(() => {
        saveTodosLocalStorage()
    }, [todoItems,saveTodosLocalStorage])

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
