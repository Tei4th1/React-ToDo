import React from 'react'
import { Container } from '../Container'

export interface TodoBaseInterface {
  id: number
  title: string
  isChecked: boolean
}

export const TodoBase = ({ id, title, isChecked }: TodoBaseInterface) => {
  return (
    <Container key={id}>
      <input type="checkbox" checked={isChecked} />
      <span>{title}</span>
    </Container>
  )
}
