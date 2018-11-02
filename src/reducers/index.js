import { combineReducers } from 'redux';
import questions from './questions';

export default combineReducers({
  question: questions,
});
