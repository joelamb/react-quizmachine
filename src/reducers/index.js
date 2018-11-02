import { combineReducers } from 'redux';
import questions from './questions';
import options from './options';

export default combineReducers({
  quiz: questions,
  options: options,
});
