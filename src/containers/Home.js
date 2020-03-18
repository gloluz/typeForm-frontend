import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Container from "../components/Container";
import Flex from "../components/Flex";
import Box from "../components/Box";
import Icon from "../components/Icon";
import QuestionBox from "../components/QuestionBox";
import { COLORS } from "../constants";
import Title from "../components/Title";
import { Link } from "react-router-dom";
import { fetchForms } from "../services/fetchForms";

const BoxText = styled.h2`
  color: ${COLORS.white};
  font-size: 22px;
  margin-top: 10px;
`;

const Home = () => {
  const [forms, setForms] = useState([]);

  /**
   * Function to read all forms on Home screen
   */
  const getForms = async () => {
    const forms = await fetchForms();

    if (forms) {
      setForms(forms);
    }
  };

  useEffect(() => {
    getForms();
  }, []);

  return (
    <Container width={1190}>
      <Title level={1} style={{ marginTop: 90, marginBottom: 20 }}>
        Mes formulaires
      </Title>

      <Flex wrap>
        <Box color="blue">
          <Link to="/form/create" style={{ textDecoration: "none" }}>
            <Flex
              direction="column"
              justify="center"
              align="center"
              style={{ height: "100%" }}
            >
              <Icon icon="add" size="45px" color="white" />
              <BoxText>Nouveau formulaire</BoxText>
            </Flex>
          </Link>
        </Box>
        {forms.map(form => (
          <QuestionBox question={form.title} key={form._id} id={form._id} />
        ))}
      </Flex>
    </Container>
  );
};

export default Home;
