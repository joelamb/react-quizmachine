import { connect } from 'react-redux';
import Question from '../components/Question';
import { fetchQuestion } from '../actions';

const mapStateToProps = state => {
  return {
    question: state.question
  }
};

const mapDisatchToProps = dispatch => {
  return {
    handleClick: () => dispatch(fetchQuestion()),
    fetchQuestion: dispatch(fetchQuestion())
  }
};

export default connect(
  mapStateToProps,
  mapDisatchToProps,
)(Question);
