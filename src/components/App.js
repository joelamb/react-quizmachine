import React from 'react';
import OptionsContainer from '../containers/OptionsContainer';
import QuestionContainer from '../containers/QuestionContainer';
import ScoreBoardContainer from '../containers/ScoreboardContainer';
import '../styles/app.scss';
import { fetchQuestion } from '../actions';
import ResultContainer from '../containers/ResultContainer';

class App extends React.Component {

  componentDidMount() {
    fetchQuestion();
  }

  render() {
    return (
      <main>
        <h1>App contents go here</h1>
        <OptionsContainer />
        <QuestionContainer />
        <ResultContainer />
        <ScoreBoardContainer />
      </main>
    )
  }
}

export default App;
