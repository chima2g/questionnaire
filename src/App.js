import './App.css';
import Questionnaire from './components/Questionnaire';
import questions from './questions';
import userData from './userData';

function App() {

  return (
    <div className="App">
      <Questionnaire prevDialog={userData} questionArr={questions}/>
    </div>
  );
}

export default App;
