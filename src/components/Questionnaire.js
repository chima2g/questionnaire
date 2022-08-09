import { useState, useRef } from "react";
import { getFormattedAnswer, isValidQuestion } from "../helpers";
import Input from "./Input";

const Questionnaire = ({prevDialog = [], questionArr = []}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState('');
  const [dialog, setDialog] = useState(prevDialog);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [error, setError] = useState(false);

  const inputRef = useRef(null);
  
  const currentQuestion = questionArr[currentQuestionIndex]?? {};
  const {questionText, answerFormat, answerFormatterFunc, validateQuestionFunc, drowpDownAnswers, validateAnswerFunc, validateAnswerErrorMessage} = currentQuestion;
  const dialogComplete = questionArr === [] || currentQuestionIndex >= questionArr.length;

  const focusOnAnswerInput = (e) => {
    e.preventDefault();
    inputRef.current.focus();
  };

  const handleChange = (e) => {
    setError(false);

    const newAnswer = getFormattedAnswer(e.target.value, answerFormatterFunc)

    if(typeof validateAnswerFunc === 'function' && !validateAnswerFunc(newAnswer))
      setError(true);

    setCurrentAnswer(getFormattedAnswer(e.target.value, answerFormatterFunc))
  }

  const handleBlur = (e) => {  
    setError(false);

    const newAnswer = getFormattedAnswer(e.target.value, answerFormatterFunc)

    if(typeof validateAnswerFunc === 'function' && !validateAnswerFunc(newAnswer))
        setError(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newAnswer = getFormattedAnswer(inputRef.current.value, answerFormatterFunc)
    setCurrentAnswer(newAnswer);
    
    if(typeof validateAnswerFunc === 'function' && !validateAnswerFunc(newAnswer))
    {
      setError(true);
      return;
    }

    const answeredQuery = { question: questionText, answer: newAnswer };
    let newDialog = [...dialog, answeredQuery];

    setDialog(newDialog);
    setError(false);
    setCurrentAnswer("");
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    console.log("newDialog: ", newDialog);
  }

  const handleDone = (e) => {
    e.preventDefault(); 
    setShowSuccessMessage(true)
  }

  if(!isValidQuestion(dialog, validateQuestionFunc))
    setCurrentQuestionIndex(currentQuestionIndex + 1);

  return (
    <>
      {showSuccessMessage ? (
        <div className="questionnaire">
          <div>Success!</div>
          <div>Thank you for completing the questionaire</div>
        </div>
      ) : (
        <div className="questionnaire">
          <h2>Questionnaire</h2>
          <form onSubmit={focusOnAnswerInput}>
            <label>Question:</label>
            <input type="text" disabled={true} value={questionText ?? ""}/>
            <label>Answer:</label>
            <Input
              answerFormat={answerFormat}
              dialogComplete={dialogComplete}
              setCurrentAnswer={setCurrentAnswer}
              currentAnswer={currentAnswer}
              changeFunc={handleChange}
              handleBlur={handleBlur}
              drowpDownAnswers={drowpDownAnswers}
              inputRef={inputRef}
            />
            <label className="error-message">
              {error ? validateAnswerErrorMessage : ""}
            </label>
            {dialogComplete ? (
              <button onClick={handleDone}>Done</button>
            ) : (
              <button onBlur={handleSubmit}>Submit answer</button>
            )}
          </form>
        </div>
      )}
    </>
  );
};

export default Questionnaire;
