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
    const { question } = this.props;

    return (
      <article>
        <p>{question.question}</p>
      </article >

    )
  }
}

export default Question;