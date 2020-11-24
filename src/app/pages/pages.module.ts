import { NgModule } from '@angular/core';
import { UserDetailsModalComponent } from './user-details-modal/user-details-modal.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ShareComponentsModule } from '../share-components/share-components.module';

@NgModule({
  declarations: [
    UserDetailsModalComponent,
    UsersPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ShareComponentsModule
  ],
  exports: [
    UserDetailsModalComponent,
    UsersPageComponent
  ]
})
export class PagesModule {}