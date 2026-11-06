import { useMemo, useState } from 'react'
import './App.css'
const numbers = [1, 2, 3, 4, 5];

function App() {
  const [min, setMin] = useState(3);
  const [count, setCount] = useState(0);

  const filtered = useMemo(() => {
    console.log("필터 계산");
    return numbers.filter(number => number >= min);

  }, [min]);

  return (
    <>
      <input type='number' value={min} onChange={e => setMin(Number(e.target.value))}/>
      <p>결과:{filtered.join(', ' )}</p>
      <button onClick={() => setCount(count + 1)}>클릭횟수 : {count}</button>
    </>
  )
}
export default App