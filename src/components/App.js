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
        <header>
          <i className="material-icons">menu</i>
          <h1>Mastermind</h1>
        </header>
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
