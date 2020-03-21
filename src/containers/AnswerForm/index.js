import React, { useState, useEffect } from "react";

import Container from "../../components/Container";
import Flex from "../../components/Flex";
import { Link, useParams, useHistory } from "react-router-dom";
import Icon from "../../components/Icon";
import { StyledText } from "../Form/styles";
import { BlueBox } from "../../components/BlueBox";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Rating from "../../components/Rating";
import { fetchForm } from "../../services/fetchForm";
import { updateForm } from "../../services/updateForm";
import { TextArea, TitleEnd } from "./styles";

const INITIAL_FORM = { title: "", answers: [], questions: [] };

const AnswerForm = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [questionScreen, setQuestionScreen] = useState("home");
  const [answers, setAnswers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const { id } = useParams();
  const history = useHistory();

  const beginQuestion = () => setQuestionScreen("question");

  /**
   * Function to go to previous question
   */
  const previousScreen = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setQuestionScreen("home");
    }
  };

  /**
   * Function to go to the next screen
   */
  const nextScreen = () => {
    if (currentQuestion < form.questions?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuestionScreen("success");
      saveAnswers();
    }
  };

  /**
   * Function to answer in text area
   * @param {string} text
   * @param {number} index
   */
  const addTextAnswer = (text, index) => {
    const newAnswers = [...answers];

    newAnswers[index] = {
      type: "text",
      text,
      question: form.questions[index].title
    };

    setAnswers(newAnswers);
  };

  /**
   * Function to answer with a rating
   * @param {number} rating
   * @param {number} index
   */
  const addRatingAnswer = (rating, index) => {
    const newAnswers = [...answers];

    newAnswers[index] = {
      type: "note",
      rating,
      question: form.questions[index].title
    };

    setAnswers(newAnswers);
  };

  /**
   * Function to check if there is an answer, to disabled next button if there is no answer
   */
  const isValidAnswer = () => {
    const answer = answers[currentQuestion];

    if (!answer) {
      return false;
    }

    if (answer.type === "text") {
      if (answer.text.trim() === "") {
        return false;
      }
    }

    return true;
  };

  /**
   * Function to read a form
   */
  const getForm = async () => {
    const form = await fetchForm(id);

    if (form) {
      setForm(form);
    } else {
      history.push("/");
    }
  };

  /**
   * Function to save answers at the end of the form
   */
  const saveAnswers = async () => {
    const newForm = {
      ...form,
      answers: [...form.answers, answers]
    };

    return await updateForm(newForm);
  };

  useEffect(() => {
    getForm();
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
      </Flex>

      <BlueBox>
        {questionScreen === "home" && (
          <Flex direction="column" justify="center" flex="1">
            <Title level={4}>Sondage</Title>
            <Title level={1} style={{ marginTop: 20, marginBottom: 20 }}>
              {form?.title}
            </Title>

            {form.questions.length === 0 ? (
              <>
                <Title level={2}>Pas encore de question pour le moment</Title>
                <Link to={`/form/${id}`} style={{ textDecoration: "none" }}>
                  <Button
                    appearance="outline"
                    color="blue"
                    style={{ marginTop: 15 }}
                  >
                    Ajouter des questions
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Title level={2}>{form.questions.length} questions</Title>
                <Button
                  appearance="fill"
                  color="blue"
                  style={{ marginTop: 15 }}
                  onClick={beginQuestion}
                >
                  Commencer
                </Button>
              </>
            )}
          </Flex>
        )}

        {questionScreen === "question" && (
          <Flex direction="column" justify="center" align="center" flex="1">
            <Flex
              flex="1"
              direction="column"
              justify="center"
              align="center"
              style={{ maxWidth: "100%" }}
            >
              <Title level={4} style={{ marginBottom: 15, marginTop: 10 }}>
                Question {currentQuestion + 1}
              </Title>
              <Title level={1}>{form.questions[currentQuestion].title}</Title>

              {form.questions[currentQuestion].type === "text" && (
                <TextArea
                  placeholder="Répondez ici..."
                  onChange={e => addTextAnswer(e.target.value, currentQuestion)}
                  value={
                    answers[currentQuestion]
                      ? answers[currentQuestion].text
                      : ""
                  }
                />
              )}

              {form.questions[currentQuestion].type === "note" && (
                <Flex align="center" justify="center" style={{ height: 215 }}>
                  <Rating
                    onChange={rating =>
                      addRatingAnswer(rating, currentQuestion)
                    }
                    value={
                      answers[currentQuestion]
                        ? answers[currentQuestion].rating
                        : undefined
                    }
                  />
                </Flex>
              )}
            </Flex>

            <Flex
              direction="row"
              justify="space-between"
              style={{ width: "100%" }}
            >
              <Button
                appearance="text"
                color="blue"
                iconBefore="arrow-left"
                onClick={previousScreen}
              >
                Précédent
              </Button>

              <Button
                appearance="fill"
                color="blue"
                iconAfter="arrow-right"
                onClick={nextScreen}
                disabled={!isValidAnswer()}
              >
                Suivant
              </Button>
            </Flex>
          </Flex>
        )}

        {questionScreen === "success" && (
          <Flex flex="1" direction="column" justify="center" align="center">
            <TitleEnd level={1}>Merci d'avoir répondu à ce formulaire</TitleEnd>

            <Link to="/" style={{ textDecoration: "none" }}>
              <Button appearance="fill" color="blue" style={{ marginTop: 60 }}>
                Accéder à mes formulaires
              </Button>
            </Link>
          </Flex>
        )}
      </BlueBox>
    </Container>
  );
};

export default AnswerForm;
