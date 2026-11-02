import './App.css'
import { useState } from 'react';
function App() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");
  const onClickAdd = ()=>{
    if(todo.length > 0) {
      setTodoList([todo, ...todoList]);
    }
    setTodo('');
  }
  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  }
  const onClickReset = () => {
    setTodoList([])
    setTodo('')
  }
  return (
    <>
      <button onClick={onClickReset}>RESET</button>
      <input value={todo} onChange={onChangeTodo}></input>
      <button onClick={onClickAdd}>ADD</button>
      <ul>
        {
          todoList.map(it => <li key = {it}>{it}</li>)
        }
      </ul>
    </>
 );
}
export default App