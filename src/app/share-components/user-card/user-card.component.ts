import { Component, OnInit, Input } from '@angular/core';
import { UserInterface } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user: UserInterface;

  constructor() { }

  get isFavorite() {
    return this.user.id === Number.parseInt(sessionStorage.getItem(this.user.name));
  }
}
