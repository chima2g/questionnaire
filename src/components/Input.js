import Dropdown from "./Dropdown"
import TextInput from "./TextInput"

const Input = ({ answerFormat, dialogComplete, setCurrentAnswer, currentAnswer, changeFunc, handleBlur, drowpDownAnswers, inputRef }) => {
  if(answerFormat === "dropdown")
    return (<Dropdown
      dialogComplete={dialogComplete}
      setCurrentAnswer={setCurrentAnswer}
      currentAnswer={currentAnswer}
      changeFunc={changeFunc}
      handleBlur={handleBlur}
      drowpDownAnswers={drowpDownAnswers}
      inputRef={inputRef}
    />)

  return (<TextInput
    dialogComplete={dialogComplete}
    currentAnswer={currentAnswer}
    changeFunc={changeFunc}
    handleBlur={handleBlur}
    inputRef={inputRef}
  />)
};

export default Input;
