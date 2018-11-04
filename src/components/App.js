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
          <div>
            <button onClick={() => this.props.showOptions(this.props.show)} ><i className="material-icons">menu</i></button>
            <h1>Mastermind</h1>
          </div>
        </header>
        <section className="page">
          {this.props.lives > 0 &&
            <React.Fragment>
              {this.props.show &&
                <OptionsContainer />
              }
              <QuestionContainer />
              <ScoreBoardContainer />
              <ResultContainer />
            </React.Fragment>
          }
          {this.props.lives === 0 &&
            <GameOverContainer />
          }
        </section>
      </main>
    )
  }
}

export default App;
