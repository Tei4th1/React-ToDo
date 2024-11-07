import * as React from "react";
import styled from "styled-components";

interface ArrowIconInterface {
  direction?: "up" | "down";
}

const StyledRotationWrapper = styled.div<{ $direction?: string }>`
  width: 20px;
  height: 20px;
  transform: ${({ $direction }) =>
    $direction === "up" ? "rotate(-90deg)" : "rotate(90deg)"};
`;
export const ArrowIcon = ({ direction = "up" }: ArrowIconInterface) => (
  <StyledRotationWrapper $direction={direction}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 512 512"
    >
      <path d="M290.9 44.3c-6.4 2.4-10.2 5.3-21.1 16.5C257.2 73.5 254.7 78 254.7 88c0 12.4-1.4 10.6 60.1 72.2l55.7 55.8H196.8c-172.2 0-173.8 0-179.2 2-7.4 2.8-13.9 9.8-16.1 17.4-1.3 4.5-1.6 9.1-1.3 22.4.3 14.5.6 17.3 2.5 21.3 2.5 5.6 8.4 11.8 13.8 14.4 3.9 2 7.5 2 179.3 2.5l175.2.5-56 56c-61.7 61.7-60.4 60.1-60.3 72.2.1 9.6 3.1 14.8 16.5 27.9 14 13.8 17.6 15.9 27.8 15.9 6.2-.1 8.4-.5 12.5-2.7 6.7-3.6 195.3-192.3 198.1-198.3 2.8-6 2.6-17.6-.5-23.6-3.2-6.4-192.8-195.8-198.5-198.4-5.2-2.3-15.1-2.9-19.7-1.2z" />
    </svg>
  </StyledRotationWrapper>
);
