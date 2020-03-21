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
import NoRoute from "./containers/NoRoute";

const Header = styled.header`
  height: 100px;
  margin-bottom: 24px;
  border-bottom: 1px solid ${COLORS.silver};
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    height: 70px;
  }
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
        <Route path="/form/create" exact>
          <Form />
        </Route>

        <Route path="/form/:id/answer" exact>
          <AnswerForm />
        </Route>

        <Route path="/form/:id" exact>
          <Form />
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>

        <Route component={NoRoute} />
      </Switch>
    </Router>
  );
};

export default App;
