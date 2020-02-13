import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import boardReducer from './reducers/board';
import wordsReducer from './reducers/words';

const rootReducer = combineReducers({
  boardReducer,
  wordsReducer
});

export default createStore(
  rootReducer,
  applyMiddleware(thunk)
);
