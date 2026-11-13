import { UserContext } from "../context/contexts"
import { useContext, useState } from "react"
import { UserProvider } from "../context/providers.jsx";

function Child2(){
    const { user } = useContext(UserContext);
    return <h3>{user.name} {user.email}</h3>
}

function Child() {
    const {changeName} = useContext(UserContext);
    const [text, setText] = useState("")
    return (
        <>
            <input value={text} onChange={e=>setText(e.target.value)}/>
            <button onClick={()=> changeName(text)}>Name</button>
        </>
    )
}

function ContextEx2(){
    return (
        <>
            <h1>ContextEx2</h1>
            <UserProvider>
            <Child/>
            <Child2/>
            </UserProvider>
        </>
    )
}

export default ContextEx2