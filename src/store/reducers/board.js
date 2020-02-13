import * as actionTypes from '../actions/action.types';
import { updateObject } from '../../utility';

const initialState = {
  board: [],
  currentWord: '',
  player: null,
  loading: false,
  error: false
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOARD_START:
      return createBoardStart(state);
    case actionTypes.CREATE_BOARD_SUCCESS:
      return createBoardSuccess(state, action);
    case actionTypes.CREATE_BOARD_FAIL:
      return createBoardFail(state, action);
    case actionTypes.CLEAR_BOARD:
      return clearBoard(state);
    case actionTypes.SELECT_LETTER:
      return selectLetter(state, action);
    case actionTypes.UNSELECT_LETTER:
      return unselectLetter(state, action);
    case actionTypes.ADD_TO_CURRENT_WORD:
      return addToCurrentWord(state, action);
    case actionTypes.DELETE_FROM_CURRENT_WORD:
      return deleteFromCurrentWord(state);
    default:
      return state;
  }
};

const createBoardStart = (state) => {
  return updateObject(state, {
    loading: true,
    error: false
  });
};

const createBoardSuccess = (state, action) => {
  return updateObject(state, {
    board: action.payload.board,
    player: action.payload.player,
    loading: false,
    error: false
  });
};

const createBoardFail = (state, action) => {
  return updateObject(state,{
    loading: false,
    error: action.payload.error
  });
};

const selectLetter = (state, action) => {
  const board = [...state.board];

  board[action.payload.row][action.payload.column].selected = true;

  return updateObject(state,{
    board: board
  });
};

const unselectLetter = (state, action) => {
  const board = [...state.board];

  board[action.payload.row][action.payload.column].selected = false;

  return updateObject(state,{
    board: board
  });
};

const addToCurrentWord = (state, action) => {
  const currentWord = state.currentWord;

  return updateObject(state,{
    currentWord: currentWord + action.payload.letter
  });
};

const deleteFromCurrentWord = (state) => {
  return updateObject(state,{
    currentWord: state.currentWord.slice(0, -1)
  });
};

const clearBoard = (state) => {
  const board = [...state.board];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      board[i][j].selected = false;
    }
  }
  return updateObject(state,{
    board: board,
    currentWord: ''
  });
};

export default boardReducer;
