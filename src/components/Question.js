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
            return <li className="answer btn" key={answer} onClick={() => { handleClick(answer, difficulty, question.correct_answer); fetchQuestion(); }}>{decode(answer)}
            </li>
          })}
        </ul>
      </React.Fragment>
    }
  </article >

)



export default Question;