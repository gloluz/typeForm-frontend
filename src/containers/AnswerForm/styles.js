import styled from "styled-components";
import { COLORS } from "../../constants";
import Title from "../../components/Title";

export const TextArea = styled.textarea`
  background-color: ${COLORS.white};
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 35px 25px;
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${COLORS.darkBlue};
  font-size: 18px;
  font-weight: 400;
  font-family: "Averta", sans-serif;
  max-width: 100%;
  width: 1040px;
  min-height: 215px;
  box-sizing: border-box;

  &:focus {
    box-shadow: 0 0 0 1px ${COLORS.blue};
  }
`;

export const TitleEnd = styled(Title)`
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 30px;
  }
`;
