import React from "react";

import { removeTodo, selectTodos, toggleTodo } from "@redux/slice/todosSlice";
import { RootState } from "@redux/store";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useTypedSelector(selectTodos);
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} className='w-fit mx-60'>
          <label>
            <input
              type="checkbox"
              className="h-8 w-8 mr-10"
              checked={todo.completed}
              onChange={() => dispatch(toggleTodo(todo.id))}
            />
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 border-2 border-black">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <span>{todo.title}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};

