import { connect } from 'react-redux';
import App from '../components/App';
import { fetchQuestion, fetchHiScores } from '../actions';

const mapStateToProps = state => {
  return {
    lives: state.results.lives
  }
}

const mapDisatchToProps = {
  fetchQuestion,
  fetchHiScores,
};

export default connect(
  mapStateToProps,
  mapDisatchToProps
)(App);