import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from '../types';
export const categoriesRequest = () => {
  return (dispatch) => {
    dispatch({
      type: CATEGORIES_REQUEST,
    });
  };
};

export const categoriesSuccess = (categories) => {
  return (dispatch) => {
    dispatch({
      type: CATEGORIES_SUCCESS,
      payload: categories,
    });
  };
};

export const categoriesFail = () => {
  return (dispatch) => {
    dispatch({
      type: CATEGORIES_FAIL,
    });
  };
};
