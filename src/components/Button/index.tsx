import React from "react";
import styled from "styled-components";

interface ButtonInterface {
  children: JSX.Element | string;
  disabled?: boolean;
  onClick: () => void;
}

const StyledButton = styled.button`
  border: 2px solid #f5f5f5;
  background-color: #f5f5f5;
  border-radius: 6px;
  height: 54px;
  padding: 10px;
  font-family: "Inter";
  font-size: 1.25em;
  text-transform: uppercase;
`;

export const Button = ({
  onClick,
  children,
  disabled = false,
}: ButtonInterface) => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
