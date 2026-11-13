import { useReducer } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case "ADD":
            return state + 1
        case "RESET":
            return 0
        default:
            return state
    }
}

function ReducerEx1() {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <>
            <h1>ReducerEx1</h1>
            <h2>{state}</h2>
            <button onClick={() => dispatch({type:"ADD"})}>ADD</button>
        </>
    )
}

export default ReducerEx1   