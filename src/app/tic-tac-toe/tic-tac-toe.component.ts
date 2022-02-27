import { Component } from '@angular/core';
import { CellState } from '../types/cell-state.type';
import { findWinningLine, createMatrix } from '../utils/game.helper';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss']
})
export class TicTacToeComponent {

  board: CellState[][];
  currentPlayer: number;
  gameHasWinner: boolean = false;
  gameIsTie: boolean = false;

  constructor() {
    this.board = createMatrix(3);
    this.currentPlayer = 0;
  }

  gameMessage(): string {
    switch (true) {
      case this.gameHasWinner:
        return `Player ${this.currentPlayer + 1} has won`;
      case this.gameIsTie:
        return `Tie`;
      default:
        return `It's Player ${this.currentPlayer + 1} turn`;
    }
  }

  onCellClick(cell: CellState): void {
    if (this.gameHasWinner || cell.selected) return;
    cell.selected = true;
    cell.type = this.currentPlayer === 0 ? 'X' : 'O';
    this.checkBoard();
    if (!this.gameHasWinner) {
      this.currentPlayer = ++this.currentPlayer % 2
    };
  }

  onResetClick(): void {
    this.board = createMatrix(3);
    this.gameHasWinner = false;
    this.gameIsTie = false;
    this.currentPlayer = 0;
  }

  checkBoard(): void {
    const winningLine = findWinningLine(this.board);
    this.gameHasWinner = !!winningLine;
    if (this.gameHasWinner) {
      winningLine?.forEach(cell => cell.winner = true);
      return;
    }

    this.gameIsTie = this.board.every(r => r.every(c => c.selected));
  }
}
