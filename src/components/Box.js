import React from "react";
import styled, { css } from "styled-components";

const StyledBox = styled.div`
  border-radius: 10px;
  height: 230px;
  width: calc(33.33% - 16px);
  margin: 0 24px 24px 0;
  padding: 24px;
  box-sizing: border-box;

  &:nth-child(3) {
    margin-right: 0;
  }

  ${({ color }) =>
    color === "blue" &&
    css`
      background: linear-gradient(
        270deg,
        #84c0d2 0%,
        rgba(141, 195, 211, 0.5) 98.55%
      );
    `}
  ${({ color }) =>
    color === "silver" &&
    css`
      background: linear-gradient(
        269.71deg,
        #eaedef 0.16%,
        rgba(234, 238, 239, 0.35) 98.29%
      );
    `};
`;

const Box = ({ children, color }) => {
  return <StyledBox color={color}>{children}</StyledBox>;
};

export default Box;
