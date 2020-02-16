import React from 'react';

const WordsPlayed = ({words}) => {
  let wordsList = null;

  if (words.length) {
    wordsList = (
      <ul>
        {words.map((word) => (
          <li className={word.valid ? "valid" : "invalid"} key={word.word}>
            <span className="word-content">{word.word}</span>
            <span className="word-points">+ {word.points}</span>
          </li>))}
      </ul>
    );
  }
  return (
    <div className="words">
      {wordsList}
    </div>
  );
};

export default WordsPlayed;
