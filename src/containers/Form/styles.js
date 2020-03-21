import styled, { css } from "styled-components";

import Button from "../../components/Button";
import { COLORS } from "../../constants";
import Flex from "../../components/Flex";

/**
 * Global Styles of the form
 */
export const InputTitle = styled.input`
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

  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }

  @media screen and (max-width: 1024px) {
    width: 300px;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const StyledText = styled.span`
  color: ${COLORS.black};
  font-family: "Averta", sans-serif;
  font-weight: bold;
  font-size: 18px;
  margin-left: 15px;
  margin-right: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-left: 5px;
    margin-right: 0;
  }
`;

export const TabList = styled(Flex)`
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
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

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin: 5px 0 0 0;
    padding-bottom: 10px;
  }

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

  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
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

  @media screen and (max-width: 768px) {
    margin-left: 10px;
    margin-bottom: 10px;
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
  margin-top: -10px;
  padding: 0 24px;
  max-height: 0;
  border-radius: 5px;
  background-color: #d5f7cb;
  color: #488436;
  border: 1px solid #80d268;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: 0.3s all ease;
  overflow: hidden;
  box-sizing: border-box;
  z-index: 10;

  ${({ show }) =>
    show &&
    css`
      opacity: 1;
      margin-top: 0;
      max-height: 100px;
    `}

  @media screen and (max-width: 768px) {
    font-size: 14px;
    width: calc(100% - 24px);
    right: 12px;
    top: inherit;
    bottom: 12px;
    padding: 0 12px;
  }
`;

export const TopBar = styled(Flex)`
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: -10px;

    > *:nth-child(2) {
      order: 3;
      width: 100%;
      margin-top: 15px;

      > input {
        flex: 1;
      }
    }
  }
`;

export const ButtonContainer = styled(Flex)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

export const ButtonAddQuestion = styled(Button)`
  @media screen and (max-width: 768px) {
    margin: 0 0 10px 0 !important;
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

export const QuestionContainer = styled(Flex)`
  margin-bottom: 50px;

  @media screen and (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const AnswerContainer = styled(Flex)`
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const NoAnswerText = styled.div`
  font-family: "Averta", sans-serif;
  font-size: 16px;
  color: ${COLORS.darkBlue};
`;
