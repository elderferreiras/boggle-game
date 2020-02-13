import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Board from './components/Board';
import * as actions from './store/actions';
import { useSelector } from 'react-redux';
function App() {
  const dispatch = useDispatch();
  const board = useSelector(state => state.boardReducer.board);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    dispatch(actions.createBoard('Elder'));
  }, [dispatch]);

  const handleWordClick = (word) => {
    setCurrentWord((prev) => prev + word);
  };

  console.log(currentWord);
  return (
    <Fragment>
      <header>Boggle Game</header>
      <main>
        <article>
          <Board board={board} clicked={handleWordClick}/>
          <p>{currentWord}</p>
        </article>
      </main>
      <footer>Elder Patten Ferreira</footer>
    </Fragment>
  );
}

export default App;
