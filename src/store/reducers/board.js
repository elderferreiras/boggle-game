import * as actionTypes from '../actions/action.types';
import { updateObject } from '../../utility';

const initialState = {
  board: [],
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

export default boardReducer;
