import { createContext } from "react";

export const TodoContext = createContext({
    todos:[],
    addTodo:null,
    deleteTodo:null
});