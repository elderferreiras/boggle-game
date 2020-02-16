import React from 'react';
import { isValidWord } from '../word.service';

describe('word.service.test.js', () => {
  it('should validate a word', async () => {
    const board = await isValidWord('test');
    expect(board).toBe(true);
  });
});
