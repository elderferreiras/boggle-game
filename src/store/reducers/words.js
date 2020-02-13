import * as actionTypes from '../actions/action.types';
import { updateObject } from '../../utility';

const initialState = {
  validWords: [],
  invalidWords: [],
  loading: false,
  error: false
};

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_WORD_START:
      return createWordStart(state);
    case actionTypes.CREATE_WORD_SUCCESS:
      return createWordSuccess(state, action);
    case actionTypes.CREATE_WORD_FAIL:
      return createWordFail(state, action);
    default:
      return state;
  }
};

const createWordStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false
  });
};

const createWordSuccess = (state, action) => {
  return updateObject(state, {
    validWords: state.validWords.concat(action.payload.validWords),
    invalidWords: state.invalidWords.concat(action.payload.invalidWords),
    loading: false,
    error: false
  });
};

const createWordFail = (state, action) => {
  return updateObject(state,{
    loading: false,
    error: action.payload.error
  });
};

export default wordsReducer;
