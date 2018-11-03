import React from 'react';
import OptionsContainer from '../containers/OptionsContainer';
import QuestionContainer from '../containers/QuestionContainer';
import ScoreBoardContainer from '../containers/ScoreboardContainer';
import '../styles/app.scss';
import { fetchQuestion } from '../actions';
import ResultContainer from '../containers/ResultContainer';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchQuestion();
  }

  render() {
    return (
      <main>
        <h1>App contents go here.. you've got {this.props.lives} lives</h1>
        <OptionsContainer />
        <QuestionContainer />
        <ResultContainer />
        <ScoreBoardContainer />
        {/* <GameOver /> */}
      </main>
    )
  }
}

export default App;
