import { useReducer, useState } from "react"
import { userReducer } from "../reducers"
function ReducerEx2() {
    const [user, dispatch] = useReducer(userReducer, {name:"user", email:"user@user.com"})
    const [text, setText] = useState("")
    const changeName = () => {
        dispatch({type:"name", payload:text})
        setText("")
    }
    const changeEmail = () => {
        dispatch({type:"email", payload:text})
        setText("")
    }
    return (
        <>
            <h1>ReducerEx2</h1>
            <h3>Name:{user.name}, Email:{user.email}</h3>
            <input value={text} onChange={e => setText(e.target.value)}/>
            <button onClick={changeName}>Name</button>
            <button onClick={changeEmail}>Email</button>
        </>
    )
}

export default ReducerEx2   