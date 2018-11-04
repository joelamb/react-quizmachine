import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion, submitAnswer, hideQuestion } from '../actions';

const mapStateToProps = state => {
  return {
    question: state.quiz.question,
    answers: state.quiz.answers,
    difficulty: state.quiz.question.difficulty,
  }
};

const mapDisatchToProps = dispatch => {
  return {
    fetchQuestion: () => dispatch(fetchQuestion()),
    handleClick: (answer, difficult, correctAnswer) => { dispatch(submitAnswer(answer, difficult, correctAnswer)) }
  }
}

export default connect(
  mapStateToProps,
  mapDisatchToProps,
)(Question);
