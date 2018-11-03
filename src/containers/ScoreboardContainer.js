import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = state => {
  return {
    score: state.results.score,
    lives: state.results.lives
  }
}

export default connect(
  mapStateToProps
)(Scoreboard);