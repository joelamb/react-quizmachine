import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => {
  return { lives: state.results.lives }
}

export default connect(
  mapStateToProps
)(App);