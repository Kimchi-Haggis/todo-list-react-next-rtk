import ContentsBox from '@components/common/box/ContentsBox';
import ItemBox from '@components/common/box/ItemBox';
import SectionBox from '@components/common/box/SectionBox';
import React from 'react'
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';

const Todo = () => {


  return (
    <SectionBox className="bg-grain01 h-screen">
      <ContentsBox className="w-full sm:w-2/3">
        <ItemBox boxType='box-item-head'>
          <TodoForm />

        </ItemBox>
        <ItemBox boxType='box-item-head'>
        <TodoList />
        </ItemBox>
      </ContentsBox>
    </SectionBox>
  )
}

export default Todo;