import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = state => {
  return {
    correctAnswer: state.results.correctAnswer,
    questionsAnswered: state.results.questionsAnswered
  }
}

export default connect(
  mapStateToProps
)(Result);