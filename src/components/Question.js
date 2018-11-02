import React from 'react';

class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchQuestion();
  }

  render() {
    const { question, answers, handleClick } = this.props;

    return (
      <article>
        {question.question &&
          <React.Fragment>
            <p>{question.question}</p>
            <ul>
              {answers.map(answer => (
                <li key={answer}><button onClick={() => { handleClick(answer); this.props.fetchQuestion(); }}>{answer}</button></li>
              ))}
            </ul>
          </React.Fragment>
        }
      </article >

    )
  }
}

export default Question;