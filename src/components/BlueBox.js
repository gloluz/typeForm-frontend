import styled from "styled-components";

import { COLORS } from "../constants";

export const BlueBox = styled.div`
  background-color: ${COLORS.skyBlue};
  min-height: calc(100vh - 224px);
  box-sizing: border-box;
  border-radius: 10px;
  margin: 24px 0;
  padding: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    padding: 24px 12px;
    min-height: auto;
  }
`;
