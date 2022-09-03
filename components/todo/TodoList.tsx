import React from "react";

import { clearTodo, removeTodo, selectTodos, toggleTodo } from "@redux/slice/todosSlice";
import { RootState } from "@redux/store";
import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useTypedSelector(selectTodos);

  const handleClear = () => {
    dispatch(clearTodo()); 
  };

  return (
    <div className="text-4xl">
      <div className="" onClick={handleClear}>Clear List</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className='my-4 text-black dark:text-white h-full border-2 border-black dark:border-white'>
            <label className="flex px-4 h-full text-left">
              <div className={"w-2/3" + (todo.completed? " line-through" : "")}>{todo.title}</div>
              <div className="w-1/3 flex">
                <label className="my-auto">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleTodo(todo.id))}
                  />
                  {todo.completed?
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9.75h4.875a2.625 2.625 0 010 5.25H12M8.25 9.75L10.5 7.5M8.25 9.75L10.5 12m9-7.243V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185z" />
                    </svg>
                    :
                    <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  }
                </label>
                <button onClick={() => dispatch(removeTodo(todo.id))}>
                  <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg>
                </button>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>

  );
};

