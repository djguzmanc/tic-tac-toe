import { CellState } from "../types/cell-state.type";

export const createMatrix = (size: number) => {
  const matrix = [];
  for (let i = 0; i < size; i++) {
    matrix.push(Array.from({
      length: size,
    }, () => ({
      selected: false,
    })));
  }
  return matrix;
}

const selected = (cell: CellState) => cell.selected;
const type = (cell: CellState) => cell.type;

export const findWinningLine = (board: CellState[][]) => {
  const winningLines = [
    board[0],
    board[1],
    board[2],
    [board[0][0], board[1][0], board[2][0]],
    [board[0][1], board[1][1], board[2][1]],
    [board[0][2], board[1][2], board[2][2]],
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]]
  ];

  const winningLine = winningLines.find(
    line => line.every(c => selected(c) && type(c) === type(line[0]))
  );
  return winningLine;
}
