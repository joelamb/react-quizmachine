import { connect } from 'react-redux';
import Options from '../components/Options';
import { setOptions, fetchQuestion } from '../actions'

const mapStateToProps = state => {
  return {
    categoryID: state.options.categoryID,
    dificulty: state.options.difficulty,
  }
}

const mapDispatchToProps = dispatch => ({
  handleSubmit: (categoryID, difficulty) => {
    dispatch(setOptions(categoryID, difficulty));
    dispatch(fetchQuestion());
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);