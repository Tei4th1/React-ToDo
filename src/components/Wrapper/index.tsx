import React from 'react'
import styled from 'styled-components'

export const Background = styled.body`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  flex-direction: column;
`

type TWrapper = {
  children: JSX.Element | JSX.Element[]
}

export const Wrapper = ({ children }: TWrapper) => {
  return <Background>{children}</Background>
}
