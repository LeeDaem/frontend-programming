/* 11월6일실습 */
import { memo, useState, useCallback } from 'react';

const Button = memo(({ handleClick }) => {
  return <p onClick={handleClick}>ADD</p>;
})

function App() {
  const [count, setCount] = useState(0);

  console.log(`App 렌더링 - ${name}, ${count}`)
  const handleClick = useCallback(()=>{
    setCount(prev => prev + 1)
  },[]);

  return (
    <>
      <h1>{count}</h1>
      <Button handleClick={handleClick}/>
    </>
  )
}
export default App