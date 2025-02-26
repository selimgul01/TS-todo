import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { TodoInitialState,  TodoType } from "../types/Types";

const initialState:TodoInitialState = {
  todos:[]
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (state:TodoInitialState,action:PayloadAction<TodoType>)=>{
      state.todos.push(action.payload)
    },
    deleteTodo: (state:TodoInitialState,action:PayloadAction<TodoType>) => {
      state.todos = state.todos.filter((item:TodoType) => item.id !== action.payload.id)

    },
    todoUpdate: (state:TodoInitialState,action:PayloadAction<TodoType>)=>{
      const findTodo = state.todos.find((item:TodoType) => item.id === action.payload.id)
       if (findTodo) {
          const tempTodos = [...state.todos.map((item)=> {
            if (item.id === action.payload.id) {
              
              return { ...item , content: action.payload.content}
            }else{
              return item
            }
        })]
        state.todos = tempTodos
      }
    }
  },
});

export const {createTodo,deleteTodo,todoUpdate} = todoSlice.actions;

export default todoSlice.reducer;
 
