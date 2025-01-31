import { useState } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/todoSlice";
import { TodoType } from "../types/Types";

const TodoCreate = () => {
  const [todoInput, setTodoInput] = useState<string>("");

  const dispatch = useDispatch();

  const createTodoHandler = () => {
    
    if (todoInput.trim().length > 0) {
      const newTodo: TodoType = {
        content: todoInput,
        id: Math.floor(Math.random() * 1000000),
      };
      dispatch(createTodo(newTodo));
      setTodoInput("");
    } else {
      alert("Bir To do Girmelisin!"); 
    }
  };
  return (
    <div className="todo-create">
      <input
        value={todoInput}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setTodoInput(event.target.value)
        }
        className="todo-input"
        type="text"
        placeholder="Todo Giriniz..."
      />
      <button onClick={createTodoHandler} className="todo-button">
        Oluştur
      </button>
    </div>
  );
};

export default TodoCreate;
