import { connect } from 'react-redux';
import GameOver from '../components/GameOver';
import { submitHiScore } from '../actions';

const mapStateToProps = state => {
  return {
    score: state.results.score,
    hiscores: state.results.hiscores
  }
}

const mapDispatchToProps = {
  submitHiScore,
}

export default connect(
  mapStateToProps
)(GameOver);
