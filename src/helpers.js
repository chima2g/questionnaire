  const getFormattedAnswer = (value, answerFormatterFunc) => {

    let formattedValue = value;
    
    if(typeof answerFormatterFunc === 'function')
      formattedValue = answerFormatterFunc(value);

    return formattedValue;
  }

  const isValidQuestion = (dialog = [], validateQuestionFunc) => {
    if(dialog.length === 0 || typeof validateQuestionFunc !== 'function')
      return true;

    return validateQuestionFunc(dialog);
  }

  export {
    getFormattedAnswer,
    isValidQuestion,
  };