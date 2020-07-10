import {
  CATEGORIES_REQUEST,
  CATEGORIES_SUCCESS,
  CATEGORIES_FAIL,
} from '../types';

const INITIAL_STATE = {categories: [], loading: false};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST:
      return {...state, loading: true};
    case CATEGORIES_SUCCESS:
      return {...state, loading: false, categories: action.payload};
    case CATEGORIES_FAIL:
      return {...state, loading: false};
    default:
      return state;
  }
};
