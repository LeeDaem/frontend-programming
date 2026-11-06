import { useState, useRef } from '/react'
import '/App.css'
function App() {
  console.log(`App 랜더링 - state:${count}, ref:${value}`)
  const [count, setCount] = useState(0)
  const value = useRef(0)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>state: {count}</button>
      <button onClick={() => value.current += 1 }>ref: {value}</button>
    </>
  )
}
export default App