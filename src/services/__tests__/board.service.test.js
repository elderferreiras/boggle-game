import React from 'react';
import { generateBoard } from '../board.service';

describe('board.service.test.js', () => {
  it('should generate a game board', () => {
    const board = generateBoard();
    expect(board).toHaveLength(4);
  });

  it('should generate all rows', () => {
    const board = generateBoard();
    expect(board[0]).toHaveLength(4);
    expect(board[1]).toHaveLength(4);
    expect(board[2]).toHaveLength(4);
    expect(board[3]).toHaveLength(4);
  });
});
