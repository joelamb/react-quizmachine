import React from 'react';
import { decode } from 'he';
import '../styles/question.scss';

const Question = ({ question, answers, difficulty, handleClick, fetchQuestion }) => (

  <article className="question-holder" >
    {
      question.question &&
      <React.Fragment>
        <p className="question">{decode(question.question)}</p>
        <ul className="answers">
          {answers.map(answer => {
            return <li className="answer" key={answer}>
              <button onClick={() => { handleClick(answer, difficulty, question.correct_answer); fetchQuestion(); }} className="btn">{decode(answer)}</button>
            </li>
          })}
        </ul>
      </React.Fragment>
    }
  </article >

)



export default Question;