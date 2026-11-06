import './App.css'
import { useRef, useState, useCallback } from 'react'
import TodoItem from './TodoItem.jsx';

function App() {
  const idRef = useRef(1)
  const inputRef = useRef(null)
  const [todos, setTodos] = useState([])
  const onDelete = useCallback((id)=>{
    setTodos( prev => prev.filter(it => it.id !== id))
  },[]);

  const onAdd = ()=>{
    const input = inputRef.current;
    if(!input) return;
    const todo = {
      id: idRef.current,
      job: inputRef.current.value
    }
    setTodos([todo, ...todos])
    idRef.current += 1
    inputRef.current.value=''
  }
  console.log(`App with ${todos.length} items`)
  return (
    <>
    <input ref={inputRef}/>
    <button onClick={onAdd}>ADD</button>
    {todos.map(it => <TodoItem key={it.id} {...it} onDelete={onDelete}/>)}
    </>
  )
}

export default App
