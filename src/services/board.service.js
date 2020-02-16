export const generateBoard = () => {
  const letters = getLetters();

  let board = [];
  let rows = [];
  let rowCount = 0;
  let columnCount = 0;

  for (let i = 0; i < letters.length; i++) {
    rows.push({
      letter: letters[i],
      selected: false,
      row: rowCount,
      column: columnCount++,
    });

    if ((i + 1) % 4 === 0) {
      board.push(rows);
      rows = [];
      rowCount++;
      columnCount = 0;
    }
  }

  return board;
};

const getLetters = () => {
  //Dice configuration for the English Boggle:
  const dices = [
    ['R', 'I', 'F', 'O', 'B', 'X'],
    ['I', 'F', 'E', 'H', 'E', 'Y'],
    ['D', 'E', 'N', 'O', 'W', 'S'],
    ['U', 'T', 'O', 'K', 'N', 'D'],
    ['H', 'M', 'S', 'R', 'A', 'O'],
    ['L', 'U', 'P', 'E', 'T', 'S'],
    ['A', 'C', 'I', 'T', 'O', 'A'],
    ['Y', 'L', 'G', 'K', 'U', 'E'],
    ['Qu', 'B', 'M', 'J', 'O', 'A'],
    ['E', 'H', 'I', 'S', 'P', 'N'],
    ['V', 'E', 'T', 'I', 'G', 'N'],
    ['B', 'A', 'L', 'I', 'Y', 'T'],
    ['E', 'Z', 'A', 'V', 'N', 'D'],
    ['R', 'A', 'L', 'E', 'S', 'C'],
    ['U', 'W', 'I', 'L', 'R', 'G'],
    ['P', 'A', 'C', 'E', 'M', 'D'],
  ];

  const result = [];

  for (let dice of dices) {
    let letter = dice[Math.floor(Math.random() * dice.length)];
    result.push(letter);
  }

  const vowelsCount = result.filter((letter) => ['A', 'E', 'I', 'O', 'U'].includes(letter)).length;
  const consonantsCount = result.filter((letter) => !['A', 'E', 'I', 'O', 'U'].includes(letter)).length;

  if (vowelsCount < 5 || consonantsCount < 5) {
    return getLetters();
  }

  return result;
};
