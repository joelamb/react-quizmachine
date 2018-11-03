import { connect } from 'react-redux';
import GameOver from '../components/GameOver';
import { submitHiScore, setPlayerName } from '../actions';

const mapStateToProps = state => {
  return {
    score: state.results.score,
    hiscores: state.results.hiscores,
    playerName: state.results.playerName
  }
}

const mapDispatchToProps = {
  submitHiScore,
  setPlayerName
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver);
