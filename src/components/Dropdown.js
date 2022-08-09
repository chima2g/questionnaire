import { useEffect } from "react";

let keyIndex = 0;

const Dropdown = ({ dialogComplete, setCurrentAnswer, currentAnswer, changeFunc, handleBlur, drowpDownAnswers, inputRef }) => {
  useEffect(() => {
    setCurrentAnswer(drowpDownAnswers[0]) //Set answer to first option on initial render
  }, [setCurrentAnswer, drowpDownAnswers])

  return (
  <select disabled={dialogComplete} value={currentAnswer} onChange={changeFunc} onBlur={handleBlur} ref={inputRef}>
    {drowpDownAnswers.map((optionValue) => (
      <option key={keyIndex++} value={optionValue}>
        {optionValue.toString()}
      </option>
    ))}
  </select>
)};

export default Dropdown;
