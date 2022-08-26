import React from "react";

import { selectTodos, toggleTodo } from "@redux/slice/todosSlice";
import { RootState } from "@redux/store";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useTypedSelector(selectTodos);

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

