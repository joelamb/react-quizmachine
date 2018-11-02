import React from 'react';
import QuestionContainer from '../containers/QuestionContainer';
import ScoreBoardContainer from '../containers/ScoreboardContainer';
import '../styles/app.scss';
import { fetchQuestion } from '../actions';

class App extends React.Component {

  componentDidMount() {
    fetchQuestion();
  }

  render() {
    return (
      <main>
        <h1>App contents go here</h1>
        <QuestionContainer />
        <ScoreBoardContainer />
      </main>
    )
  }
}

export default App;
