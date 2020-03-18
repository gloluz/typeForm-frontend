import React, { useState, useEffect } from "react";

import Container from "../../components/Container";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import { Link, useParams, useHistory } from "react-router-dom";
import Icon from "../../components/Icon";
import { BlueBox } from "../../components/BlueBox";
import { StyledText, Input, TabItem } from "./styles";
import Answers from "./Answers";
import Questions from "./Questions";
import { postForm } from "../../services/postForm";
import { fetchForm } from "../../services/fetchForm";
import { updateForm } from "../../services/updateForm";
import { deleteForm } from "../../services/deleteForm";

const Form = () => {
  const [selectedTab, setSelectedTab] = useState("questions");
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [titleForm, setTitleForm] = useState("");

  const { id } = useParams();
  const history = useHistory();

  /**
   * Function to change question's order
   * @param {number} index
   */
  const moveUpQuestion = index => {
    const newQuestions = [...questions];

    if (index > 0) {
      let indexToUp = newQuestions[index - 1];
      newQuestions[index - 1] = newQuestions[index];
      newQuestions[index] = indexToUp;
    }

    setQuestions(newQuestions);
  };

  const moveDownQuestion = index => {
    const newQuestions = [...questions];

    if (newQuestions.length - 1 > index) {
      let indexToDow = newQuestions[index + 1];
      newQuestions[index + 1] = newQuestions[index];
      newQuestions[index] = indexToDow;
    }

    setQuestions(newQuestions);
  };

  /**
   * Function to delete a question
   * @param {number} index
   */
  const removeQuestion = index => {
    const newQuestions = [...questions];
    newQuestions.splice(index, 1);

    setQuestions(newQuestions);
  };

  /**
   * Function to change question's title
   * @param {object} event
   * @param {number} index
   */
  const onChangeText = (event, index) => {
    const value = event.target.value;
    const newQuestions = [...questions];
    newQuestions[index].title = value;

    setQuestions(newQuestions);
  };

  /**
   * Function to change form's title
   * @param {object} event
   */
  const handleChangeText = event => {
    const value = event.target.value;

    setTitleForm(value);
  };

  const handleForm = () => {
    if (!id) {
      postForm({ title: titleForm, questions, answers });
      history.push("/");
    } else {
      updateForm({ title: titleForm, questions, answers, _id: id });
      history.push("/");
    }
  };

  /**
   * Function to add a question note or a question text
   * @param {string} type
   */
  const onAdd = type => {
    setQuestions([...questions, { title: "", type }]);
  };

  /**
   * Function to delete a form
   */
  const deletedForm = async () => {
    const isSuccess = await deleteForm(id);

    if (isSuccess) {
      history.push("/");
    } else {
      alert("Une erreur inconnue est survenue");
    }
  };

  /**
   * Function to read a form
   */
  const getForm = async () => {
    const form = await fetchForm(id);

    if (!form) {
      history.push("/");
    } else {
      setTitleForm(form.title);
      setQuestions(form.questions || []);
      setAnswers(form.answers || []);
    }
  };

  useEffect(() => {
    if (id === undefined) {
      setQuestions([]);
      setAnswers([]);
    } else {
      getForm();
    }
  }, []);

  return (
    <Container>
      <Flex direction="row" justify="space-between" align="center">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Flex direction="row" align="center">
            <Icon icon="chevron-left" color="black" size="24px" />
            <StyledText>Mes formulaires</StyledText>
          </Flex>
        </Link>

        <Flex direction="row">
          <Input
            type="text"
            name="title"
            style={{ marginRight: 10 }}
            placeholder="Nom du formulaire"
            onChange={handleChangeText}
            value={titleForm}
          />
          <Button
            appearance="outline"
            color="blue"
            iconCenter="check"
            iconSize="22px"
            onClick={handleForm}
          />
        </Flex>

        <Flex direction="row">
          <Button
            appearance="outline"
            color="pink"
            iconCenter="trash"
            style={{ marginRight: 10 }}
            onClick={deletedForm}
          />

          <Link to={`/form/${id}/answer`} style={{ textDecoration: "none" }}>
            <Button
              appearance="fill"
              color="blue"
              disabled={titleForm.trim() === ""}
            >
              Répondre
            </Button>
          </Link>
        </Flex>
      </Flex>

      <BlueBox>
        <Flex>
          <TabItem
            isSelected={selectedTab === "questions"}
            onClick={() => setSelectedTab("questions")}
          >
            Questions
          </TabItem>
          <TabItem
            isSelected={selectedTab === "answers"}
            onClick={() => setSelectedTab("answers")}
          >
            Réponses
          </TabItem>
        </Flex>

        {selectedTab === "questions" && (
          <Questions
            questions={questions}
            onChangeText={onChangeText}
            moveUpQuestion={moveUpQuestion}
            moveDownQuestion={moveDownQuestion}
            removeQuestion={removeQuestion}
            onAdd={onAdd}
            disabled={titleForm.trim() === ""}
            onSave={handleForm}
          />
        )}

        {selectedTab === "answers" && <Answers answers={answers} />}
      </BlueBox>
    </Container>
  );
};

export default Form;
