import React from "react";
import Flex from "../components/Flex";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import styled from "styled-components";
import { COLORS } from "../constants";

const ErrorCode = styled.div`
  font-size: 60px;
  font-family: "Averta", sans-serif;
  font-weight: bold;
  color: ${COLORS.blue};

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

const Separator = styled.div`
  height: 100px;
  width: 3px;
  margin: 0 40px;
  background-color: ${COLORS.skyBlue};

  @media screen and (max-width: 768px) {
    margin: 0 20px;
    height: 70px;
  }
`;

const Title = styled.div`
  font-family: "Averta", sans-serif;
  font-size: 28px;
  color: ${COLORS.black};

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const NoRoute = () => {
  return (
    <Container>
      <Flex
        direction="column"
        justify="center"
        align="center"
        style={{ height: "70vh" }}
      >
        <Flex align="center">
          <ErrorCode>404</ErrorCode>
          <Separator />
          <Title>Page non trouvée</Title>
        </Flex>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            appearance="outline"
            color="blue"
            style={{ marginTop: 60 }}
            size="big"
          >
            Retour à l'accueil
          </Button>
        </Link>
      </Flex>
    </Container>
  );
};

export default NoRoute;
