
import Todo from './Todo'
import {  useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { TodoType } from '../types/Types'

const TodoList = () => {

  const {todos} = useSelector((state: RootState) => state.todo)
 
  console.log(todos)
  return (
    <div>
      {
        todos?.map((todo:TodoType)=>(
          <Todo  key={todo.id} todo = {todo}/>
        ))
      }
    </div>
  )
} 

export default TodoList
