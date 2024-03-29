import React, { useState, useEffect } from "react";

import Container from "../../components/Container";
import Button from "../../components/Button";
import Flex from "../../components/Flex";
import { Link, useParams, useHistory } from "react-router-dom";
import Icon from "../../components/Icon";
import { BlueBox } from "../../components/BlueBox";
import {
  StyledText,
  InputTitle,
  TabItem,
  Notification,
  TopBar,
  TabList
} from "./styles";
import Answers from "./Answers";
import Questions from "./Questions";
import { postForm } from "../../services/postForm";
import { fetchForm } from "../../services/fetchForm";
import { updateForm } from "../../services/updateForm";
import { deleteForm } from "../../services/deleteForm";
import NoRoute from "../NoRoute";

const INITIAL_FORM = { title: "", answers: [], questions: [] };

const Form = () => {
  const [selectedTab, setSelectedTab] = useState("questions");
  const [form, setForm] = useState(INITIAL_FORM);
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [titleForm, setTitleForm] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const { id } = useParams();
  const history = useHistory();

  /**
   * Functions to change question's order
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

  const handleForm = async () => {
    if (!id) {
      const form = await postForm({ title: titleForm, questions, answers });
      history.push(`/form/${form._id}`);
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } else {
      updateForm({ title: titleForm, questions, answers, _id: id });
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
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

    if (form) {
      setTitleForm(form.title);
      setQuestions(form.questions || []);
      setAnswers(form.answers || []);
      setForm(form);
      setIsLoaded(true);
    } else {
      setNotFound(true);
    }
  };

  const isSaveButtonDisabled = () => {
    let disabled = false;

    if (titleForm.trim() === "") {
      disabled = true;
    }

    questions.forEach((question, index) => {
      if (question.title.trim() === "") {
        disabled = true;
      }
    });

    return disabled;
  };

  useEffect(() => {
    if (id === undefined) {
      setQuestions([]);
      setAnswers([]);
      setIsLoaded(true);
    } else {
      getForm();
    }
  }, []);

  return (
    <>
      {notFound && <NoRoute />}
      {isLoaded && (
        <>
          <Notification show={showMessage}>
            <Icon icon="check" style={{ marginRight: 10 }} />
            <p>Vos modifications ont été prises en compte !</p>
          </Notification>

          <Container>
            <TopBar direction="row" justify="space-between" align="center">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Flex direction="row" align="center">
                  <Icon icon="chevron-left" color="black" size="24px" />
                  <StyledText>Mes formulaires</StyledText>
                </Flex>
              </Link>

              <Flex direction="row">
                <InputTitle
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
                  disabled={isSaveButtonDisabled()}
                />
              </Flex>

              <Flex direction="row">
                <Button
                  appearance="outline"
                  color="pink"
                  iconCenter="trash"
                  style={{ marginRight: 10 }}
                  disabled={!id}
                  onClick={deletedForm}
                />
                <Link
                  to={`/form/${id}/answer`}
                  style={{ textDecoration: "none" }}
                >
                  <Button appearance="fill" color="blue" disabled={!id}>
                    Répondre
                  </Button>
                </Link>
              </Flex>
            </TopBar>

            <BlueBox>
              <TabList>
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
              </TabList>

              {selectedTab === "questions" && (
                <Questions
                  questions={questions}
                  onChangeText={onChangeText}
                  moveUpQuestion={moveUpQuestion}
                  moveDownQuestion={moveDownQuestion}
                  removeQuestion={removeQuestion}
                  onAdd={onAdd}
                  disabled={isSaveButtonDisabled()}
                  onSave={handleForm}
                />
              )}

              {selectedTab === "answers" && <Answers answers={answers} />}
            </BlueBox>
          </Container>
        </>
      )}
    </>
  );
};

export default Form;
