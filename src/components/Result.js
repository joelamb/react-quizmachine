import React from 'react';

const Result = ({ correctAnswer, questionsAnswered }) => (

  < div key={questionsAnswered} >
    {
      correctAnswer &&
      <React.Fragment>
        <p><img src="/static/assets/yeah_baby.jpg" alt="" /></p>
        {/* <audio src="/static/assets/yeah_baby.mp3" autoPlay="true"></audio> */}
      </React.Fragment>
    }
    {
      correctAnswer !== '' && !correctAnswer &&
      <React.Fragment>
        <p><img src="/static/assets/dang.jpg" alt="" /></p>
        {/* <audio src="/static/assets/dang.mp3" autoPlay="true"></audio> */}
      </React.Fragment>
    }
  </div >
)

export default Result;
