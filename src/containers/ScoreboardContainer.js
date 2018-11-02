import { connect } from 'react-redux';
import Scoreboard from '../components/Scoreboard';

const mapStateToProps = state => {
  return {
    score: state.quiz.score
  }
}

export default connect(
  mapStateToProps
)(Scoreboard);