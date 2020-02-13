import React from 'react';

const Board = (props) => {
  let board = null;

  if (props.board) {
    board = props.board.map((row) => {
      return (
        <div className="board-row" key={row.join()}>
          {row.map((word, index) => (
            <div className="board-cell" key={`${row.join()}-${index}`} onClick={() => props.clicked(word)}>
              <span>{word}</span>
            </div>
          ))}
        </div>
      );
    });
  }

  return (
    <div className="board">
      <div className="board-background">
        {board}
      </div>
    </div>
  );
};

export default Board;
