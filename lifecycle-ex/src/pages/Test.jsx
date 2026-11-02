import { useEffect, useState } from "react"

function Test() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    
    // useEffect(()=>{
    //     const id = setInterval(()=> console.log("start interval"), 1000)
        
    //     return () => {
    //         clearInterval(id)
    //     }
    // }, []);


    useEffect(()=>{
        console.log(count)
    }, [count]);

    return (
        <>
            <input onChange={ (e)=> setText(e.target.value)} value={text} />
            <button onClick={()=>setCount(count + 1)}>{count}</button>
        </>
    )
    
}
export default Test