import React from 'react';
import '../styles/result.scss';

class Result extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { correctAnswer, questionsAnswered, hidden, hideResult } = this.props;
    return (
      <div className="result" key={questionsAnswered}>
        {correctAnswer &&
          <React.Fragment>
            <audio
              onLoadStart={() => hideResult()}
              onEnded={() => hideResult()}
              src="/static/assets/yeah_baby.mp3" autoPlay="true">
            </audio>
            <div className="result__correct">
              {
                !hidden &&
                <img src="/static/assets/yeah_baby.jpg" alt="" />
              }
            </div>
          </React.Fragment>
        }
        {correctAnswer !== '' && !correctAnswer &&
          <React.Fragment>
            <audio
              onLoadStart={() => hideResult()}
              onEnded={() => { hideResult(); }} src="/static/assets/dang.mp3" autoPlay="true">
            </audio>
            <div className="result__incorrect">
              {
                !hidden &&
                <img src="/static/assets/dang.jpg" alt="" />
              }
            </div>
          </React.Fragment>
        }
      </div >
    )
  }
}

export default Result;
