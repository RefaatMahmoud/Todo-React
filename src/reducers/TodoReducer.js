const TodoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, action.payload]
        case 'DELETE_TODO':
            return state.filter(todo => todo.id !== action.payload.id)
        case 'TOGGLE_TODO_STATUS':
            return state.map(todo => {
                if (todo.id === action.payload.id ){
                    todo.completed = !todo.completed
                }
                return todo
            })
        default:
            return state
    }
}

export default TodoReducer
