import { Component, Input } from '@angular/core';
import { CellType } from 'src/app/types/cell-type.type';

@Component({
  selector: 'app-game-cell',
  templateUrl: './game-cell.component.html',
  styleUrls: ['./game-cell.component.scss']
})
export class GameCellComponent {
  @Input() selected!: boolean;
  @Input() type?: CellType;
  @Input() winner?: boolean;
}
