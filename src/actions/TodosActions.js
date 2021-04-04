export const ADD_TODO = (payload) => {
    return {
        type: 'ADD_TODO',
        payload: payload
    }
}

export const DELETE_TODO = (id) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            id: id
        }
    }
}

export const TOGGLE_TODO_STATUS = (id) => {
    return {
        type: 'TOGGLE_TODO_STATUS',
        payload: {
            id: id
        }
    }
}


