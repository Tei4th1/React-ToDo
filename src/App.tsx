import React from 'react'
import './App.css'
import { Wrapper, Title, TodoList } from './components'

function ToDoPage() {
  return (
    <Wrapper>
      <Title>Easy ToDo list</Title>
      <TodoList />
    </Wrapper>
  )
}

export default ToDoPage
