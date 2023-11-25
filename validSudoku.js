/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

Input: board =
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: true
Example 2:

Input: board =
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
Output: false
Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.


Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

var checkRows = function(board) {
  for (let row of board) {
      row = row.filter((num) =>(num !== '.'))
      var currentRow = new Set(row);
      if (currentRow.size !== row.length) return false;
  }
  return true
}

var checkColumns = function(board) {
  var rotatedBoard = [[],[],[],[],[],[],[],[],[]];
  for (var i = 0; i < 9; i++) {
      for (var j = 0; j < 9; j++) {
          rotatedBoard[i][j] = board[j][i]
      }
  }
  return checkRows(rotatedBoard);
}

var check3by3 = function(board) {
  var newBoard = [];
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const subgrid = [];
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          subgrid.push(board[i + k][j + l]);
        }
      }
      newBoard.push(subgrid);
    }
  }
    return checkRows(newBoard)
}

var isValidSudoku = function(board) {
  return checkRows(board) && checkColumns(board) && check3by3(board);
};