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
