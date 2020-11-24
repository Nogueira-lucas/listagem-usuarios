import { Component, OnInit } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { UserDetailsModalComponent } from '../user-details-modal/user-details-modal.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: Observable<UserInterface[]>;
  isLoadingPage = true;
  isRemovable = true;

  constructor(
    private service: UserService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.users = this.service.getUsers();

    if(this.users) {
      this.isLoadingPage = false;
    }
  }

  openDialog(user: UserInterface) {
    this.dialog.open(UserDetailsModalComponent, {
      data: user,
      minHeight: '400px',
      width: '700px'
    });
  }

  isFavorite(user: UserInterface) {
    return user.id === Number.parseInt(sessionStorage.getItem(user.name));
  }

  removeFavorite(user: UserInterface) {
    this.service.removeFavorite(user);
  }
}
