import { combineReducers } from 'redux';
import questions from './questions';
import options from './options';
import results from './results';

export default combineReducers({
  quiz: questions,
  options,
  results
});
