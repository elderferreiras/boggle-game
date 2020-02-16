import * as actionTypes from './action.types';

export const startGame = () => {
  return {
    type: actionTypes.START_GAME
  };
};

export const endGame = () => {
  return {
    type: actionTypes.END_GAME
  };
};

export const updateGameTime = (timer) => {
  return {
    type: actionTypes.UPDATE_GAME_TIME,
    payload: {
      timer
    }
  };
};

export const startPlaying = () => {
  return async (dispatch, getState) => {
    dispatch(startGame());

    let seconds = getState().gameReducer.timer;

    function tick() {
      seconds--;

      if (seconds > 0) {
        setTimeout(tick, 1000);
      }

      dispatch(updateGameTime(seconds));
    }

    tick();
  }
};

export const stopPlaying = () => {
  return async (dispatch) => {
    dispatch(endGame());
  }
};


