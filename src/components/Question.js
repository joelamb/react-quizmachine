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
            <p>{decodeURI(question.question).replace('%3F', '?').replace('%2C', ',')}</p>
            <ul>
              {answers.map(answer => {
                answer = decodeURI(answer).replace('%2C', ',');
                return <li key={answer} > <button onClick={() => { handleClick(answer); this.props.fetchQuestion(); }}>{answer}</button></li>
              })}
            </ul>
          </React.Fragment>
        }
      </article >

    )
  }
}

export default Question;