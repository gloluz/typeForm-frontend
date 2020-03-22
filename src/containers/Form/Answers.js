import React from "react";

import {
  Tab,
  AnswersOfOnePerson,
  QuestionTitle,
  AnswerText,
  AnswerContainer
} from "./styles";
import Flex from "../../components/Flex";
import QuestionType from "../../components/QuestionType";
import Rating from "../../components/Rating";
import { NoAnswerText } from "./styles";

const Answers = ({ answers }) => (
  <Tab>
    <Flex direction="column">
      {answers.length === 0 && (
        <NoAnswerText>Oooops ! Pas de réponse pour le moment...</NoAnswerText>
      )}

      {answers.map(answersOfOnePerson => (
        <AnswersOfOnePerson>
          {answersOfOnePerson.map((answer, index) => (
            <AnswerContainer direction="row">
              <div style={{ minWidth: 120 }}>
                <QuestionType type={answer.type} index={index + 1} />
              </div>

              <Flex direction="column" justify="flex-start">
                <QuestionTitle>{answer.question}</QuestionTitle>

                {answer.type === "text" && (
                  <AnswerText>
                    {answer.text.split("\n").map(line => (
                      <>
                        {line}
                        <br />
                      </>
                    ))}
                  </AnswerText>
                )}

                {answer.type === "note" && (
                  <div style={{ marginTop: 40, marginBottom: 50 }}>
                    <Rating value={answer.rating} readonly={true} />
                  </div>
                )}
              </Flex>
            </AnswerContainer>
          ))}
        </AnswersOfOnePerson>
      ))}
    </Flex>
  </Tab>
);

export default Answers;
