export const generateBoard = () => {
  const words = getWords();

  let board = [];
  let rows = [];

  for (let i = 0; i < words.length; i++) {
    rows.push(words[i]);

    if ((i + 1) % 4 === 0) {
      board.push(rows);
      rows = [];
    }
  }

  return board;
};

const getWords = () => {
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
    let word = dice[Math.floor(Math.random() * dice.length)];
    result.push(word);
  }

  const vowelsCount = result.filter((word) => ['A', 'E', 'I', 'O', 'U'].includes(word)).length;
  const consonantsCount = result.filter((word) => !['A', 'E', 'I', 'O', 'U'].includes(word)).length;

  if (vowelsCount < 5 || consonantsCount < 5) {
    return getWords();
  }

  return result;
};
