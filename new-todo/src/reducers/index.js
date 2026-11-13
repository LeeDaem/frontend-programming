export function todoReducer(state, action) {
    switch(action.type) {
        case "ADD":
            return [action.payload, ...state]
        case "DELETE":
            return state.filter(it=> it.id !== action.id)
    }
    return state
}