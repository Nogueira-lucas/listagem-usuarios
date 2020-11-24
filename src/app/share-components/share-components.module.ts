import { NgModule } from '@angular/core';
import { UserCardComponent } from './user-card/user-card.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    UserCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    UserCardComponent
  ]
})
export class ShareComponentsModule {

}