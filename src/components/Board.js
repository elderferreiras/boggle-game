import React from 'react';

const Board = (props) => {
  let board = null;

  if (props.board) {
    board = props.board.map((row, i) => {
      return (
        <div className="board-row" key={i}>
          {row.map((dice, j) => (
            <div className={["board-cell", dice.selected? "selected": ""].join(" ")} key={`${i}-${j}`} onClick={() => props.clicked(i, j)}>
              <span>{dice.letter}</span>
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
