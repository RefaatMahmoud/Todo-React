import {useState, useEffect, useCallback} from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import {Provider} from 'react-redux'
import store from './store'

function App() {
    const [inputText, setInputText] = useState('')
    const [filterSelect, setFilterSelect] = useState('all')

    return (
        <div className="App">
            <Provider store={store}>
                <header>Todo List</header>
                <TodoForm
                          inputText={inputText}
                          setInputText={setInputText}
                          filterSelect={filterSelect}
                          setFilterSelect={setFilterSelect}
                />
                <TodoList
                    filterSelect={filterSelect}
                />
            </Provider>
        </div>
    );
}

export default App;
