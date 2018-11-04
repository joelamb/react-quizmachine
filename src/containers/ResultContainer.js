import { connect } from 'react-redux';
import Result from '../components/Result';
import { hideResult } from '../actions';

export const mapStateToProps = state => {
  return {
    correctAnswer: state.results.correctAnswer,
    questionsAnswered: state.results.questionsAnswered,
    hidden: state.results.hidden
  }
}

const mapDispatchToProps = {
  hideResult,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Result);