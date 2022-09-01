import { RootState } from './../store/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TodoId = string;

type Todo = {
  id: TodoId;
  title: string;
  completed: boolean;
};

type TodosState = {
  list: Todo[];
};

const initialState = {
    list: [],
  } as TodosState;
  
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(
      state: TodosState, 
      action: PayloadAction<Todo>
    ) {
      state.list.push(action.payload);
    },
    removeTodo(
      state,
      action: PayloadAction<TodoId>
    ) {
      const todoId = action.payload;
      state.list =  state.list.filter((todo) => todo.id !== todoId)
      console.log("todo removed");
    },
    toggleTodo(
      state, 
      action: PayloadAction<TodoId>
    ) {
      const index = state.list.findIndex(({ id }) => id === action.payload);
      if (index +1) {
        state.list[index].completed = !state.list[index].completed;
      }
    },
    clearTodo(
      state,
    ) {
      state.list = [];
      console.log("clear");
    }
  },
});

export const { addTodo, removeTodo, toggleTodo, clearTodo } = todosSlice.actions;

export default todosSlice.reducer;
export const selectTodos = (state: RootState) => state.toDos.list;