import React from 'react'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

type Props = {}

const Todo = (props: Props) => {
  return (
    <div>
        <TodoForm />
        <TodoList />
    </div>
  )
}

export default Todo;