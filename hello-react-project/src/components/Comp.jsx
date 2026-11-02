
function Comp({onClick}) {
  const handleLeftClick = () => {onClick('LEFT')}
  const handelRigthClick = () => {onClick('RIGHT')}

  return(
    <div>
      <button onClick = {handleLeftClick}>LEFT</button>
      <button onClick = {handelRigthClick}>RIGHT</button>
    </div>
  )
}

export default Comp