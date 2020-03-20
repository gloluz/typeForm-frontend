import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Box from "./Box";
import Button from "./Button";
import Title from "./Title";
import { COLORS } from "../constants";
import Flex from "./Flex";
import { Link } from "react-router-dom";

const Heading = styled.h2`
  text-transform: uppercase;
  color: ${COLORS.black};
  font-size: 12px;
`;

const QuestionBox = ({ question, id }) => {
  return (
    <Box color="silver">
      <Heading>Formulaire</Heading>
      <Flex align="center" style={{ height: 130, overflow: "hidden" }}>
        <Title level={2}>{question}</Title>
      </Flex>
      <Flex justify="flex-end">
        <Link to={`/form/${id}`} style={{ textDecoration: "none" }}>
          <Button
            appearance="text"
            color="blue"
            size="small"
            style={{ marginRight: 10 }}
          >
            Editer
          </Button>
        </Link>

        <Link to={`/form/${id}/answer`} style={{ textDecoration: "none" }}>
          <Button appearance="fill" color="blue" size="small">
            Répondre
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

QuestionBox.propTypes = {
  question: PropTypes.string,
  id: PropTypes.string
};

export default QuestionBox;
