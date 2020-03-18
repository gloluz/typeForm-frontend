import React from "react";

import Icon from "./Icon";
import styled, { css } from "styled-components";
import { COLORS } from "../constants";

const Minus = styled.div`
  width: 10px;
  height: 2px;
  margin: 0 8px;
  background-color: ${COLORS.white};
`;

const StyledQuestionType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 18px;
  color: ${COLORS.white};
  border-radius: 5px;
  height: 40px;
  width: 75px;
  padding: 8px 0;
  box-sizing: border-box;

  ${({ type }) =>
    type === "text" &&
    css`
      background-color: ${COLORS.yellow};
    `}

  ${({ type }) =>
    type === "note" &&
    css`
      background-color: ${COLORS.pink};
    `}
`;

const QuestionType = ({ type, index }) => {
  return (
    <StyledQuestionType type={type}>
      {type === "text" ? (
        <>
          <span>{index}</span>
          <Minus />
          <Icon icon="file-text" size={"18px"} />
        </>
      ) : (
        <>
          <span>{index}</span>
          <Minus />
          <Icon icon="star" size={"18px"} />
        </>
      )}
    </StyledQuestionType>
  );
};

export default QuestionType;
