import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

const modules: any[] = [
  MatIconModule,
  MatButtonModule,
  MatRippleModule,
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
})
export class MaterialModule { }
