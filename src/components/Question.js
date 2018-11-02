import React from 'react';
import { fetchQuestion } from '../actions';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetchQuestion();
  }

  render() {
    const { question, answers, handleClick } = this.props;

    return (
      <article>
        <p>{question.question}</p>
        <ul>
          {answers.map(answer => (
            <li key={answer}><button onClick={() => handleClick(answer)}>{answer}</button></li>
          ))}
        </ul>
      </article >

    )
  }
}

export default Question;