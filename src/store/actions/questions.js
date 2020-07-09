import {QUESTIONS_REQUEST, QUESTIONS_SUCCESS, QUESTIONS_FAIL} from '../types';

export const questionsRequest = () => {
  return (dispatch) => {
    dispatch({
      type: QUESTIONS_REQUEST,
    });
  };
};

export const questionsSuccess = (questions) => {
  return (dispatch) => {
    dispatch({
      type: QUESTIONS_SUCCESS,
      payload: questions,
    });
  };
};

export const questionsFail = () => {
  return (dispatch) => {
    dispatch({
      type: QUESTIONS_FAIL,
    });
  };
};
