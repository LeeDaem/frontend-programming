import { memo } from "react"

function TodoItem({id, job, onDelete}){
    console.log(`item ${id}: ${job}`)
    return (
        <div>
            {job}
            <button onClick={()=> onDelete(id)}>DELETE</button>
        </div>
    )
}
//export default TodoItem
export default memo(TodoItem)