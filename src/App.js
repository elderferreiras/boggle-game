import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Board from './components/Board';
import * as actions from './store/actions';
import { useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const [path, setPath] = useState([]);
  const board = useSelector(state => state.boardReducer.board);
  const currentWord = useSelector(state => state.boardReducer.currentWord);
  const validWords = useSelector(state => state.wordsReducer.validWords);
  const invalidWords = useSelector(state => state.wordsReducer.invalidWords);

  console.log(validWords);
  console.log(invalidWords);
  useEffect(() => {
    dispatch(actions.createBoard('Elder'));
  }, [dispatch]);

  const handleWordClick = (row, column) => {
    if (board[row][column].selected) {
      if (row === path[path.length - 1].row && column === path[path.length - 1].column) {
        setPath(prev => {
          prev.pop();
          return prev;
        });
        dispatch(actions.unselectLetter(row, column));
        dispatch(actions.deleteFromCurrentWord(board[row][column].letter));
      }
    } else {
      if (!path.length || ( Math.abs(path[path.length - 1].column - column) <= 1 && Math.abs(path[path.length - 1].row - row) <= 1)) {
        dispatch(actions.addToCurrentWord(board[row][column].letter));
        dispatch(actions.selectLetter(row, column));

        setPath(prev => {
          prev.push(board[row][column]);
          return prev;
        });
      }
    }
  };

  const handleButtonClick = () => {
    setPath([]);
    dispatch(actions.createWord(currentWord));
    dispatch(actions.clearBoard());
  };

  return (
    <Fragment>
      <header>Boggle Game</header>
      <main>
        <article>
          <Board board={board} clicked={handleWordClick}/>
          <p>{currentWord}</p>
          <button onClick={handleButtonClick}>submit</button>
          <ul>
            {validWords.map((validWord) => <li>{validWord}</li>)}
          </ul>
          <ul>
            {invalidWords.map((invalidWord) => <li>{invalidWord}</li>)}
          </ul>
        </article>
      </main>
      <footer>Elder Patten Ferreira</footer>
    </Fragment>
  );
}

export default App;
