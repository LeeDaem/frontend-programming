export function userReducer(state, action) {
    switch(action.type) {
        case "name" :
            return {...state, name:action.payload}
        case "email" :
            return {...state, email:action.payload}
        default:
            return state
    }
}