import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import boardReducer from './reducers/board';
import wordsReducer from './reducers/words';
import gameReducer from './reducers/game';

const rootReducer = combineReducers({
  boardReducer,
  wordsReducer,
  gameReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
