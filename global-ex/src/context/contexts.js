import { createContext } from "react";

export const UserContext = createContext({
    user:{name: null, email:null},
    changeName:null,
    changeEmail:null
});