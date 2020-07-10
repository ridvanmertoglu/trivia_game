import {combineReducers} from 'redux';
import questionsReducer from './questions';
import categoriesReducer from './categories';

export default combineReducers({
  questionsReducer,
  categoriesReducer,
});
