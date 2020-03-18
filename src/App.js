import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { GlobalStyles } from "./styles";
import Container from "./components/Container";
import { COLORS } from "./constants";
import { ReactComponent as Logo } from "../src/assets/Logo.svg";
import Home from "./containers/Home";
import Form from "./containers/Form";
import AnswerForm from "./containers/AnswerForm";

const Header = styled.header`
  height: 100px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${COLORS.silver};
  display: flex;
  align-items: center;
`;

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Header>
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </Container>
      </Header>

      <Switch>
        <Route path="/form/create">
          <Form />
        </Route>

        <Route path="/form/:id/answer">
          <AnswerForm />
        </Route>

        <Route path="/form/:id">
          <Form />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
