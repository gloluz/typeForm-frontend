import React from "react";
import { Tab, QuestionTitleInput } from "./styles";
import Flex from "../../components/Flex";
import QuestionType from "../../components/QuestionType";
import Button from "../../components/Button";

const Questions = ({
  questions,
  onChangeText,
  moveUpQuestion,
  moveDownQuestion,
  removeQuestion,
  onAdd,
  onSave,
  disabled
}) => {
  return (
    <Tab>
      <Flex direction="column" flex={"1"}>
        <Flex direction="column" style={{ minWidth: "100%" }}>
          {questions.map((question, index) => (
            <Flex
              align="center"
              style={{ marginBottom: 50, minWidth: "100%" }}
              key={index}
            >
              <QuestionType type={question.type} index={index + 1} />
              <QuestionTitleInput
                value={question.title}
                name="questionTitle"
                onChange={event => onChangeText(event, index)}
              />

              <Button
                appearance="bgWhite"
                color="black"
                iconCenter="chevron-up"
                size="small"
                iconSize="28px"
                style={{ marginLeft: 10 }}
                disabled={index === 0}
                onClick={() => moveUpQuestion(index)}
              />
              <Button
                appearance="bgWhite"
                color="black"
                iconCenter="chevron-down"
                size="small"
                iconSize="28px"
                disabled={index === questions.length - 1}
                style={{ marginLeft: 10 }}
                onClick={() => moveDownQuestion(index)}
              />
              <Button
                appearance="bgWhite"
                color="pink"
                iconCenter="trash"
                size="small"
                style={{ marginLeft: 10 }}
                onClick={() => removeQuestion(index)}
              />
            </Flex>
          ))}
        </Flex>

        <Flex>
          <Button
            appearance="outline"
            iconBefore="file-text"
            color="blue"
            style={{ marginRight: 15 }}
            onClick={() => onAdd("text")}
          >
            Ajouter une question "Texte"
          </Button>
          <Button
            appearance="outline"
            iconBefore="star"
            color="blue"
            onClick={() => onAdd("note")}
          >
            Ajouter une question "Note"
          </Button>
        </Flex>
      </Flex>

      <Flex
        justify="flex-end"
        style={{ justifySelf: "flex-end", marginTop: 24 }}
      >
        <Button
          appearance="fill"
          color="blue"
          disabled={disabled}
          onClick={onSave}
        >
          Sauvegarder
        </Button>
      </Flex>
    </Tab>
  );
};

export default Questions;
