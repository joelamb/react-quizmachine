import { connect } from 'react-redux';
import GameOver from '../components/GameOver';
import { setPlayerName, submitHiScore } from '../actions';

const mapStateToProps = state => {
  return {
    score: state.results.score,
    hiscores: state.results.hiscores,
    playerName: state.results.playerName
  }
}

const mapDispatchToProps = {
  setPlayerName,
  submitHiScore,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver);
