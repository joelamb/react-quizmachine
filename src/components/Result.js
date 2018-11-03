import React from 'react';

const Result = ({ correctAnswer }) => (
  <div>
    {correctAnswer &&
      <p>Yes</p>
    }
  </div>
)

export default Result;