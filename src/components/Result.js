import React from 'react';

const Result = ({ correctAnswer, questionsAnswered }) => (

  < div key={questionsAnswered} >
    {
      correctAnswer &&
      <React.Fragment>
        <p>Yes</p>
        <audio src="/static/assets/yeah_baby.mp3" autoPlay="true"></audio>
      </React.Fragment>
    }
    {
      correctAnswer !== '' && !correctAnswer &&
      <React.Fragment>
        <p>No</p>
        <audio src="/static/assets/dang.mp3" autoPlay="true"></audio>
      </React.Fragment>
    }
  </div >
)

export default Result;