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
    toggleTodo(
      state, 
      action: PayloadAction<TodoId>
    ) {
      const index = state.list.findIndex(
        ({ id }) => id === action.payload);
      
      if (index) {
        state.list[index].completed = !state.list[index].completed;
      }
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;

export default todosSlice.reducer;
export const selectTodos = (state: RootState) => state.toDos.list;