import * as actionTypes from './action.types';
import * as API from '../../services';

export const createWordStart = () => {
  return {
    type: actionTypes.CREATE_WORD_START
  };
};

export const resetWords = () => {
  return {
    type: actionTypes.RESET_WORDS
  };
};

export const createWordSuccess = ({word, valid}) => {
  return {
    type: actionTypes.CREATE_WORD_SUCCESS,
    payload: {
      word,
      valid
    }
  };
};

export const createWordFail = (error) => {
  return {
    type: actionTypes.CREATE_WORD_FAIL,
    payload: {
      error
    }
  };
};

export const createWord = (word) => {
  return async (dispatch) => {
    dispatch(createWordStart());

    try {
      const isValid = await API.isValidWord(word);

      dispatch(createWordSuccess({word, valid: isValid}));
    } catch (error) {
      dispatch(createWordFail(error))
    }
  }
};

export const clearWords = () => {
  return (dispatch) => {
    dispatch(resetWords())
  }
};
