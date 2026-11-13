import { useReducer, useCallback, useMemo } from "react";
import { userReducer } from "../reducers";
import { UserContext } from "./contexts";

export function UserProvider({children}) {
    const [user, dispatch] = useReducer(userReducer, {name:'ABCD', email:'a@a.com'})
    const changeName = useCallback((name) => {
        dispatch({type:"name", payload:name})
    }, []);
    const changeEmail = useCallback((email)=>{
        dispatch({type:"email", payload:email})
    }, [])
    const value= useMemo(()=> ({
        user, changeName, changeEmail
    }), [user, changeName, changeEmail])
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}