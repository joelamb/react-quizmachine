import { connect } from 'react-redux';
import App from '../components/App';
import { fetchQuestion, fetchHiScores, showOptions } from '../actions';

const mapStateToProps = state => {
  return {
    lives: state.results.lives,
    show: state.options.show
  }
}

const mapDisatchToProps = {
  fetchQuestion,
  fetchHiScores,
  showOptions
};

export default connect(
  mapStateToProps,
  mapDisatchToProps
)(App);