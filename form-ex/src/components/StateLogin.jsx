import { useState } from "react";
function StateLogin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleOnClick = ()=> {
        console.log(username)
        console.log(password)
        const obj = {username, password}
    }

    return (
        <>
            <input value={username} onChange={(e)=> setUsername(e.target.value)} />
            <input value={password} onChange={(e)=> setPassword(e.target.value)}/>
            <button onClick={handleOnClick}>Login</button>
        </>
    )
}

export default StateLogin