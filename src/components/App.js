import React from 'react';
import OptionsContainer from '../containers/OptionsContainer';
import QuestionContainer from '../containers/QuestionContainer';
import ResultContainer from '../containers/ResultContainer';
import ScoreBoardContainer from '../containers/ScoreboardContainer';
import GameOverContainer from '../containers/GameOverContainer';

import '../styles/app.scss';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchHiScores();
    this.props.fetchQuestion();
  }

  render() {
    return (
      <main>
        <h1>App contents go here.. you've got {this.props.lives} lives</h1>
        {this.props.lives > 0 &&
          <React.Fragment>
            <OptionsContainer />
            <QuestionContainer />
            <ScoreBoardContainer />
            <ResultContainer />
          </React.Fragment>
        }
        {this.props.lives === 0 &&
          <GameOverContainer />
        }
      </main>
    )
  }
}

export default App;
