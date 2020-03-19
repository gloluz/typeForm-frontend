import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../constants";

const StyledRating = styled.div`
  width: 390px;
  height: 70px;
  border: 1px solid ${COLORS.darkBlue};
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 220px;
    height: 50px;
  }
`;

const StyledButton = styled.button`
  height: 100%;
  width: 20%;
  font-family: "Averta", sans-serif;
  color: ${COLORS.darkBlue};
  font-size: 24px;
  background: none;
  border: none;
  border-right: 1px solid ${COLORS.darkBlue};
  transition: 0.3s all ease;
  outline: none;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  &:disabled {
    color: ${COLORS.darkBlue};
  }

  &:last-child {
    border-right: none;
  }

  ${({ disabled }) =>
    !disabled &&
    css`
      cursor: pointer;

      &:hover {
        background-color: ${COLORS.pink};
      }
    `}

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: ${COLORS.pink};
    `}
`;

const Rating = ({ onChange, value, readonly }) => {
  const ratings = [1, 2, 3, 4, 5];

  return (
    <StyledRating>
      {ratings.map(rating => (
        <StyledButton
          onClick={() => onChange && onChange(rating)}
          key={rating}
          isSelected={value === rating}
          disabled={readonly !== undefined && readonly}
        >
          {rating}
        </StyledButton>
      ))}
    </StyledRating>
  );
};

export default Rating;
