import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users: User[] = [{
    id: 1,
    name: 'John',
    lastName: 'Doe',
    email: 'jd@gmail.com',
    userName: 'johndoe',
    password: '123456'
  },
  {
    id: 2,
    name: 'juan',
    lastName: 'Doe',
    email: 'jd@gmail.com',
    userName: 'juandoe',
    password: '123456'
  }];

  constructor() { }

  findAll(): Observable<User[]> {
    return of(this.users);
  }
}
