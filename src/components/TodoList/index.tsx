import React from 'react'
import { TodoBase } from '../TodoBase'
import styled from 'styled-components'

export interface TodoListInterface {
  id: number
  title: string
  isChecked: boolean
}

const data: TodoListInterface[] = [
  {
    id: 0,
    title: 'wash a car',
    isChecked: true
  },
  {
    id: 1,
    title: 'read',
    isChecked: false
  },
  {
    id: 2,
    title: 'make money',
    isChecked: false
  },
  {
    id: 3,
    title: 'Make a TodoList',
    isChecked: false
  }
]

const StyledList = styled.ul`
  margin: auto;
`
const StyledListElement = styled.li`
  list-style-type: none;
  margin: auto;
`

export const TodoList = () => {
  const listItems = data.map((task) => {
    return (
      <StyledListElement key={task.id}>
        <TodoBase id={task.id} title={task.title} isChecked={task.isChecked} />
      </StyledListElement>
    )
  })
  return <StyledList>{listItems}</StyledList>
}
