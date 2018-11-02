import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion, submitAnswer } from '../actions';

const mapStateToProps = state => {
  return {
    question: state.quiz.question,
    answers: state.quiz.answers
  }
};

const mapDisatchToProps = dispatch => {
  return {
    fetchQuestion: dispatch(fetchQuestion()),
    handleClick: answer => dispatch(submitAnswer(answer)),
  }
};

// const mapDisatchToProps = {
//   fetchQuestion,
// };

export default connect(
  mapStateToProps,
  mapDisatchToProps,
)(Question);
