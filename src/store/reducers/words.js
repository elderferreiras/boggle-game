import * as actionTypes from '../actions/action.types';
import { updateObject } from '../../utility';

const initialState = {
  words: [],
  points: 0,
  loading: false,
  error: false
};

const wordsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.RESET_WORDS:
      return resetWords(state);
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

const resetWords = () => {
  return {
    words: [],
    points: 0,
    loading: false,
    error: false
  };
};

const createWordStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false
  });
};

const createWordSuccess = (state, action) => {
  const words = [...state.words];
  const newWord = {word: action.payload.word, valid: action.payload.valid, points: 0};

  let points = state.points;

  if (action.payload.valid) {
    const wordPoints = getPoints(action.payload.word);
    points += wordPoints;
    newWord.points = wordPoints;
  }

  words.unshift(newWord);

  return updateObject(state, {
    words,
    points: points,
    loading: false,
    error: false
  });
};

const createWordFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.payload.error
  });
};

const getPoints = (word) => {
  if (word.length < 5) {
    return 1;
  } else if (word.length === 5) {
    return 2;
  } else if (word.length === 6) {
    return 3;
  } else if (word.length === 7) {
    return 5;
  } else if (word.length > 7) {
    return 11;
  }
};

export default wordsReducer;
