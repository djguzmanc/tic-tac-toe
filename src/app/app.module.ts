import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { GameCellComponent } from './tic-tac-toe/game-board/game-cell/game-cell.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameBoardComponent } from './tic-tac-toe/game-board/game-board.component';

import { MaterialModule } from './shared/material-module/material.module';
import { IconTypePipe } from './pipes/icon-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TicTacToeComponent,
    GameCellComponent,
    GameBoardComponent,
    IconTypePipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
