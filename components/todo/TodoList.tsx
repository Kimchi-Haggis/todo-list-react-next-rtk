// features/todos/TodoList.tsx

import { selectTodos, toggleTodo } from "@redux/slice/todosSlice";
import { RootState } from "@redux/store";
import React from "react";
import {
  useSelector,
  useDispatch,
  TypedUseSelectorHook 
} from 'react-redux'

// Import selector and action from slice:

// We use RootState we defined earlier
// to make `useSelector` understand 
// the store structure via type assertion 
// with the `TypedUseSelectorHook` generic:
// const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();
  // Now, use the selector inside right away,
  // no need to destructure the result:
  const todos = useSelector(selectTodos);

  // The rest of the code stays the same:
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

