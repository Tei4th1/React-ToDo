import React from "react";
import styled from "styled-components";

export const StyledInput = styled.input`
  border: 2px solid #f5f5f5;
  background-color: #f5f5f5;
  border-radius: 6px;
  width: 100%;
  height: 40px;
  padding: 5px;
  font-family: "Inter";
  font-size: 1.25em;
  color: #35383e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
`;

interface InputInterface {
  value: string;
  placeholder: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Input = ({ value, placeholder, onChange }: InputInterface) => {
  return (
    <StyledInput value={value} placeholder={placeholder} onChange={onChange} />
  );
};
