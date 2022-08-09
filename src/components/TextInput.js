    
const TextInput = ({dialogComplete, currentAnswer, changeFunc, handleBlur, inputRef} ) => (<input
    type="text"
    disabled={dialogComplete}
    value={currentAnswer}
    onChange={changeFunc}
    onBlur={handleBlur}
    ref={inputRef}
  />
)

export default TextInput;