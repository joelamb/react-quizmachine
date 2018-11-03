import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion, submitAnswer } from '../actions';

const mapStateToProps = state => {
  return {
    question: state.quiz.question,
    answers: state.quiz.answers,
    difficulty: state.options.difficulty,
  }
};

const mapDisatchToProps = {
  fetchQuestion,
  handleClick: submitAnswer,
};

export default connect(
  mapStateToProps,
  mapDisatchToProps,
)(Question);
