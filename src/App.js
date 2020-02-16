import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';
import Board from './components/Board';
import * as actions from './store/actions';
import { useSelector } from 'react-redux';
import ControlPanel from './components/ControlPanel';
import GameStatus from './components/GameStatus';
import WordsPlayed from './components/WordsPlayed';
import { isAdjacent } from './utility';

function App() {
  const dispatch = useDispatch();
  const [path, setPath] = useState([]);

  const board = useSelector(state => state.boardReducer.board);
  const currentWord = useSelector(state => state.boardReducer.currentWord);
  const words = useSelector(state => state.wordsReducer.words);
  const points = useSelector(state => state.wordsReducer.points);
  const timer = useSelector(state => state.gameReducer.timer);
  const playing = useSelector(state => state.gameReducer.playing);
  const gameOver = useSelector(state => state.gameReducer.gameOver);

  useEffect(() => {
    if (gameOver) {
      dispatch(actions.createGameOverBoard());
    }
  }, [dispatch, gameOver]);

  const handleStartGameClick = () => {
    dispatch(actions.resetWords());
    dispatch(actions.createBoard());
    dispatch(actions.startPlaying());
  };

  const handleSubmitButtonClick = () => {
    if (currentWord.length && !words.filter((word) => currentWord === word.word).length) {
      setPath([]);
      dispatch(actions.createWord(currentWord));
      dispatch(actions.clearBoard());
    } else {
      dispatch(actions.clearBoard());
    }
  };

  const handleClearButtonClick = () => {
    setPath([]);
    dispatch(actions.clearBoard());
  };

  const handleWordClick = (row, column) => {
    if (playing && !gameOver) {
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
        if (!path.length || isAdjacent(path, column, row)) {
          dispatch(actions.addToCurrentWord(board[row][column].letter));
          dispatch(actions.selectLetter(row, column));

          setPath(prev => {
            prev.push(board[row][column]);
            return prev;
          });
        }
      }
    }
  };

  let controlPanel = (!playing || (playing && gameOver)) &&
    <button className="game-start-button" onClick={handleStartGameClick}>Start New Game</button>;
  if (currentWord.length) {
    controlPanel =
      <ControlPanel submitClicked={handleSubmitButtonClick} clearClicked={handleClearButtonClick} word={currentWord}/>;
  }

  let gameStatus = null;
  if (playing) {
    gameStatus = <GameStatus points={points} timer={timer}/>
  }

  let playedWords = null;
  if (playing) {
    playedWords =
      <WordsPlayed words={words}/>
  }

  return (
    <Fragment>
      <header>
        <span>
          Boggle Game
        </span>
      </header>
      <main>
        <article className="game">
          {controlPanel}
          <Board board={board} clicked={handleWordClick}/>
          {gameStatus}
          {playedWords}
        </article>
      </main>
      <footer>
        <span>
          Elder Patten Ferreira 2020
        </span>
      </footer>
    </Fragment>
  );
}

export default App;
