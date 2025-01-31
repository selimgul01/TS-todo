import { CiCircleRemove,CiCircleCheck,CiEdit  } from "react-icons/ci";
import { TodoProps, TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { deleteTodo, todoUpdate } from "../redux/todoSlice";
import { useState } from "react";


const Todo = ({todo}:TodoProps) => {

  const [editable,setEditable] = useState<boolean>(false)
  const [currentTodo,setCurrentTodo] = useState<string>(todo.content)
  const dispatch = useDispatch()

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(todo))
  }

  const todoUpdateHandler = () => {
    setEditable(!editable)
    
    const newCurrentTodo:TodoType = {
      content: currentTodo,
      id: todo.id 
    }
    dispatch(todoUpdate(newCurrentTodo))
  }


  return (
    <div  className="todo-items">
      {editable
       ? 
        <input 
          className="todo-new-input"
          value={currentTodo} 
          onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setCurrentTodo(event.target.value)} 
        /> 
      : 
        <div> {todo.content}</div>} 

        <div className="todo-icons">
        <CiCircleRemove color="red" onClick={deleteTodoHandler} size={28} />
        
        {
          editable ? <CiCircleCheck color="green" onClick={todoUpdateHandler} size={28} /> : 
          <CiEdit color="blue" onClick={()=>setEditable(!editable)} size={28} /> 
        }
        
      </div>
    </div>
  )
}

export default Todo
