import React from "react";
import styled from "styled-components";
import { COLORS } from "../constants";

const H1 = styled.h1`
  font-family: "Averta", sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: ${COLORS.black};

  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
`;

const H2 = styled.h2`
  font-family: "Averta", sans-serif;
  font-size: 22px;
  font-weight: bold;
  color: ${COLORS.black};

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

const H3 = styled.h3`
  font-family: "Averta", sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: ${COLORS.darkBlue};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const H4 = styled.h4`
  font-family: "Averta", sans-serif;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${COLORS.darkBlue};

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

const Title = ({ children, level, ...props }) => {
  return (
    <>
      {level === 1 && <H1 {...props}>{children}</H1>}
      {level === 2 && <H2 {...props}>{children}</H2>}
      {level === 3 && <H3 {...props}>{children}</H3>}
      {level === 4 && <H4 {...props}>{children}</H4>}
    </>
  );
};

export default Title;
