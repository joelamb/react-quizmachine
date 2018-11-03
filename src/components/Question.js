import React from 'react';
import { decode } from 'he';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { question, answers, difficulty, handleClick, fetchQuestion } = this.props;

    return (
      <article>
        {question.question &&
          <React.Fragment>
            <p>{decode(question.question)}</p>
            <ul>
              {answers.map(answer => {
                return <li key={answer} > <button onClick={() => { handleClick(answer, difficulty, question.correct_answer); fetchQuestion(); }}>{decode(answer)}</button></li>
              })}
            </ul>
          </React.Fragment>
        }
      </article >

    )
  }
}

export default Question;