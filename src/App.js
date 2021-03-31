import {useState} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
    const [inputText, setInputText] = useState("")
    const [todoItems, setTodoItems] = useState([]);
    return (
        <div className="App">
            <header>Todo List {inputText}</header>
            <TodoForm todoItems={todoItems}
                      inputText={inputText}
                      setTodoItems={setTodoItems}
                      setInputText={setInputText}
            />
            <TodoList/>
        </div>
    );
}

export default App;
