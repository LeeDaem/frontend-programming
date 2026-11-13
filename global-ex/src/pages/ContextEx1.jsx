import { createContext, useContext} from 'react'

const InfoContext = createContext({name:null, role:null});

function Child2() {
    const {name} = useContext(InfoContext)
    return <h3>{name}</h3>
}

function Child1() {
    const {role} = useContext(InfoContext)
    // 사용하지 않을 name을 받아서 자식에게 중계함.
    return (
        <>
            <h3>{role}</h3>
            <Child2 />
        </>
    )
}

function ContextEx1() {
    return (
        <>
            <InfoContext.Provider value = {{Name:"ABCD", role:"ADMIN"}}>
                <h1>ContextEx1</h1>
                <Child1 name="ABCD" role="ADMIN"/>  
            </InfoContext.Provider>
            
        </>
    )
}

export default ContextEx1