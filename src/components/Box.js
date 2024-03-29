import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";

import { COLORS } from "../constants";

const StyledBox = styled.div`
  border-radius: 10px;
  height: 230px;
  width: calc(33.33% - 16px);
  margin: 0 24px 24px 0;
  padding: 24px;
  box-sizing: border-box;

  @media (min-width: 1025px) {
    &:nth-child(3n) {
      margin-right: 0;
    }
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

  @media (min-width: 601px) and (max-width: 1024px) {
    width: calc(50% - 12px);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-right: 0;
  }
`;

const Box = ({ children, color }) => {
  return <StyledBox color={color}>{children}</StyledBox>;
};

Box.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Object.keys(COLORS))
};

export default Box;
