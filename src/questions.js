const questions = [
  {
    questionText: "What is your first name?",
    answerFormat: "text",
    validateAnswerFunc: (answer) => typeof answer === "string" && answer.length > 0,
    validateAnswerErrorMessage: "Please provide a name of one or more characters",
  },
  {
    questionText: "How old are you?",
    answerFormat: "number",
    validateAnswerFunc: (answer) => answer >= 18 && answer < 65,
    validateAnswerErrorMessage: "You need to be >= 18 and < 65 years old",
    answerFormatterFunc: (value) => value.replace(/\D/g, ""),
  },
  {
    questionText: "Do you have a significant other?",
    answerFormat: "dropdown",
    drowpDownAnswers: ["True", "False"],
    validateAnswerFunc: (answer) => answer === "True" || answer === "False",
    validateAnswerErrorMessage: "Must be true or false",
  },
  {
    questionText: "What is your significant other’s name?",
    answerFormat: "text",
    validateQuestionFunc: (prevDialog) => prevDialog[prevDialog.length - 1].answer === "True",
    validateAnswerFunc: (answer) => typeof answer === "string",
    validateAnswerErrorMessage: "Must be a string",
  },
  {
    questionText: "What is the last question?",
    answerFormat: "text",
    validateAnswerFunc: (answer) => typeof answer === "string",
    validateAnswerErrorMessage: "Must be a string",
  },
];

export default questions;
