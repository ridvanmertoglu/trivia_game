import {QUESTIONS_REQUEST, QUESTIONS_SUCCESS, QUESTIONS_FAIL} from '../types';

const INITIAL_STATE = {questions: [], loading: false};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTIONS_REQUEST:
      return {...state, loading: true};
    case QUESTIONS_SUCCESS:
      return {...state, loading: false, questions: action.payload};
    case QUESTIONS_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};
