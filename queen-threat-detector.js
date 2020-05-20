const generateBoard = function(whiteQueen, blackQueen){
  let board = [];
  for (let x =0; x<8; x++) {
    board[x] = [];
    for (let y=0; y<8; y++) {
      if (x === whiteQueen[0] && y === whiteQueen[1]) {
        board[x][y] = 1;
      } else if (x === blackQueen[0] && y === blackQueen[1]) {
        board[x][y] = 1;
      } else {
      board[x][y] = 0;
      }
    }
  }
  return board;
};
const queenThreat = function(board) {
  for (x=0; x<board.length; x++) {
    for (y=0; y<board.length; y++) {
      if (whiteQueen[0] === blackQueen[0]) {
        return true;
      } else if (whiteQueen[1] === blackQueen[1]) {
        return true;
      } else if ((whiteQueen[0] + blackQueen[1]) === (blackQueen[0] + whiteQueen[1])) {
        return true;
      } else if ((whiteQueen[0] + whiteQueen[1]) === (blackQueen[0] + blackQueen[1])) {
        return true;
      } else {
        return false;
      }
    }
  }
};
let whiteQueen = [0, 5];
let blackQueen = [5, 0];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
console.log(generatedBoard);
console.log(queenThreat(generatedBoard));