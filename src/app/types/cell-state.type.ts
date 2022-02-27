import { CellType } from "./cell-type.type";

export type CellState = {
  selected: boolean;
  type?: CellType;
  winner?: boolean;
}
