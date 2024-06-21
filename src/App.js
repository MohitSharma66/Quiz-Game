import React from 'react'
import './App.css';
import FrontPage from './FrontPage.js'
import QuizPage from './QuizPage.js'

function App() {
  const [first, setFirst] = React.useState(true)

  function handleClick() {
    setFirst(first => !first)
  }

  return (
    <div className="App">
      {first ? <FrontPage onClick={handleClick} /> : <QuizPage />}
    </div>
  );
}

export default App;
