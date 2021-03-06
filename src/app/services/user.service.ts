import { NgModule, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserInterface } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.baseUrl;
  }

  getUsers(): Observable<UserInterface[]> {
    return this.httpClient.get<UserInterface[]>(`${this.baseUrl}/users`);
  }

  addAsFavorite(user: UserInterface) {
    try {
      sessionStorage.setItem(user.name, `${user.id}`);
      return false;
    } catch(err) {
      return err;
    }
  }

  removeFavorite(user: UserInterface) {
    try {
      sessionStorage.removeItem(user.name);
    } catch(err) {
      return err;
    }
  }
}