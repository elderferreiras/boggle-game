import * as actionTypes from '../actions/action.types';
import { updateObject } from '../../utility';

const initialState = {
  timer: 0,
  playing: false,
  gameOver: false
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_GAME:
      return startGame(state);
    case actionTypes.END_GAME:
      return endGame(state);
    case actionTypes.UPDATE_GAME_TIME:
      return updateGameTime(state, action);
    default:
      return state;
  }
};

const startGame = (state) =>{
  return updateObject(state, {
    playing: true,
    timer: 60,
    gameOver: false
  });
};

const endGame = (state) => {
  return updateObject(state, {
    playing: false,
    timer: 0,
    gameOver: false
  });
};

const updateGameTime = (state, action) => {
  const gameOver = action.payload.timer === 0;

  return updateObject(state, {
    timer: action.payload.timer,
    gameOver: gameOver
  });
};

export default gameReducer;
