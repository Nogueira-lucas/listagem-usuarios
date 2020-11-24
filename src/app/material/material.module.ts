import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';

const components = [
  MatCardModule,
  MatRippleModule,
  MatDividerModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatIconModule,
  MatChipsModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialModule { }
