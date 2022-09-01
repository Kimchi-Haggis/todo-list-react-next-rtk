import ContentsBox from '@components/common/box/ContentsBox';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import { clearTodo } from '@redux/slice/todosSlice';
import React from 'react'
import { useDispatch } from 'react-redux';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

const Todo = () => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearTodo()); 
  };
  
  return (
    <SectionBox className="bg-grain01 h-screen">
      <ContentsBox>
        <ItemBox boxType='box-item-head'>
          <TodoForm />
          <div onClick={handleClear}>Clear List</div>
        </ItemBox>
        <ItemBox boxType='box-item-head'>
        <TodoList />
        </ItemBox>
      </ContentsBox>
    </SectionBox>
  )
}

export default Todo;