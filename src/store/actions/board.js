import * as actionTypes from './action.types';
import * as API from '../../services';

export const createBoardStart = () => {
  return {
    type: actionTypes.CREATE_BOARD_START
  };
};

export const createBoardSuccess = ({board, player}) => {
  return {
    type: actionTypes.CREATE_BOARD_SUCCESS,
    payload: {
      board,
      player
    }
  };
};

export const createBoardFail = (error) => {
  return {
    type: actionTypes.CREATE_BOARD_FAIL,
    payload: {
      error
    }
  };
};

export const selectLetter = (row, column) => {
  return {
    type: actionTypes.SELECT_LETTER,
    payload: {
      row,
      column
    }
  };
};

export const unselectLetter = (row, column) => {
  return {
    type: actionTypes.UNSELECT_LETTER,
    payload: {
      row,
      column
    }
  };
};

export const addToCurrentWord = (letter) => {
  return {
    type: actionTypes.ADD_TO_CURRENT_WORD,
    payload: {
      letter
    }
  };
};

export const deleteFromCurrentWord = () => {
  return {
    type: actionTypes.DELETE_FROM_CURRENT_WORD
  };
};

export const clearBoard = () => {
  return {
    type: actionTypes.CLEAR_BOARD
  };
};

export const createBoard = (player) => {
  return (dispatch) => {
    dispatch(createBoardStart());

    try {
      const board = API.generateBoard();
      dispatch(createBoardSuccess({board, player}));
    } catch (error) {
      dispatch(createBoardFail(error))
    }
  }
};
