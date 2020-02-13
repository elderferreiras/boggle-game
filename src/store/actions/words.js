import * as actionTypes from './action.types';
import * as API from '../../services';

export const createWordStart = () => {
  return {
    type: actionTypes.CREATE_WORD_START
  };
};

export const createWordSuccess = ({validWords = [], invalidWords = []}) => {
  return {
    type: actionTypes.CREATE_WORD_SUCCESS,
    payload: {
      validWords,
      invalidWords
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

      if (isValid) {
        dispatch(createWordSuccess({validWords: [word]}));
      } else {
        dispatch(createWordSuccess({invalidWords: [word]}));
      }
    } catch (error) {
      dispatch(createWordFail(error))
    }
  }
};
