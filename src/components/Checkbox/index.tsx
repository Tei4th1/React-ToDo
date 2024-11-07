import React from "react";
import styled from "styled-components";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;
const StyledCheckbox = styled.div<{ $isChecked: boolean }>`
  display: inline-block;
  width: 30px;
  height: 30px;
  background: ${({ $isChecked }) => ($isChecked ? "#00CD2D" : "#35383E1A")};
  border-radius: 3px;
  transition: all 150ms;
  margin: 0 10px 0 0;
`;

interface CheckboxInterface {
  isChecked: boolean;
  onClick: () => void;
}

export const Checkbox = ({ isChecked, onClick }: CheckboxInterface) => {
  return (
    <>
      <HiddenCheckbox checked={isChecked} />
      <StyledCheckbox $isChecked={isChecked} onClick={onClick} />
    </>
  );
};
