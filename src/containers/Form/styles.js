import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

/**
 * Global Styles of the form
 */
export const Input = styled.input`
  outline: none;
  height: 50px;
  font-size: 24px;
  font-weight: bold;
  font-family: "Averta", sans-serif;
  width: 435px;
  color: ${COLORS.black};
  border: 1px solid ${COLORS.silver};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 10px;

  &:focus {
    box-shadow: 0 0 0 1px ${COLORS.black};
  }
`;

export const StyledText = styled.span`
  color: ${COLORS.black};
  font-family: "Averta", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-left: 15px;
`;

export const TabItem = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  border-bottom: 3px solid transparent;
  background: transparent;
  font-size: 24px;
  font-weight: bold;
  font-family: "Averta", sans-serif;
  color: ${COLORS.blue};
  padding: 0;
  margin-right: 80px;
  transition: 0.2s all ease;

  &:hover {
    color: ${COLORS.darkBlue};
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: ${COLORS.darkBlue};
      border-bottom-color: ${COLORS.darkBlue};
    `}
`;

export const Tab = styled.div`
  margin-top: 66px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const QuestionTitleInput = styled.input`
  outline: none;
  border: none;
  padding: 0 10px;
  height: 40px;
  flex: 1;
  background-color: ${COLORS.white};
  font-size: 16px;
  font-family: "Helvetica Neue", sans-serif;
  color: ${COLORS.black};
  border-radius: 5px;
  box-sizing: border-box;
  margin-left: 30px;
  transition: 0.2s all ease;

  &:focus {
    box-shadow: 0 0 0 1px ${COLORS.blue};
  }
`;

export const QuestionTitle = styled.span`
  color: ${COLORS.blue};
  font-size: 22px;
  font-family: "Helvetica Neue", sans-serif;
  margin-top: 5px;
`;

export const AnswerText = styled.span`
  font-size: 16px;
  font-family: "Helvetica Neue", sans-serif;
  color: ${COLORS.black};
  margin: 40px 0;
`;

export const AnswersOfOnePerson = styled.div`
  border-bottom: 1px solid ${COLORS.blue};
  flex: 1;
  min-width: 100%;
  margin-bottom: 40px;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

export const Notification = styled.div`
  position: fixed;
  top: 24px;
  right: 24px;
  padding: 16px 20px;
  border-radius: 5px;
  background-color: #d5f7cb;
  color: #488436;
  border: 1px solid #80d268;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  opacity: 0;
  transition: 0.3s all ease;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
    `}
`;
