import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { addTodo } from 'redux/slice/todosSlice';

export const TodoForm = () => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle("");

    dispatch(
      addTodo({
        id: Date.now().toString(),
        completed: false,
        title,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="todoName"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Add Todo</button>
    </form>
  );
};