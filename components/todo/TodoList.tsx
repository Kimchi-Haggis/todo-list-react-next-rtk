import React from "react";

import { removeTodo, selectTodos, toggleTodo } from "@redux/slice/todosSlice";
import { RootState } from "@redux/store";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useTypedSelector(selectTodos);

  return (
    <ul className="">
      {todos.map((todo) => (
        <li key={todo.id} className='mx-60 my-4 text-black dark:text-white h-full border-2 border-black dark:border-white'>
          <label className="flex px-4 h-full text-left">
            <div className="w-10/12 ">{todo.title}</div>
            <div className="w-2/12">
              <input
                type="checkbox"
                className="h-8 w-8 mr-10"
                checked={todo.completed}
                onChange={() => dispatch(toggleTodo(todo.id))}
              />
              <button
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 border-2 border-black dark:border-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

          </label>
        </li>
      ))}
    </ul>
  );
};

