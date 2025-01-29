import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { UserComponent } from './user/user.component';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'user-app',
  imports: [UserComponent, UserFormComponent],
  templateUrl: './user-app.component.html',
})
export class UserAppComponent implements OnInit {

  title: string = 'Listado de usuarios';

  users: User[] = [];

  userSelected: User;

  constructor(private service: UserService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
  }
  
  addUser(user: User){
    if(user.id > 0){
      this.users = this.users.map(u => (u.id == user.id) ? {... user} : u);
    } else {
      this.users = [... this.users, { ... user, id: new Date().getTime() }];
    }

    this.userSelected = new User();
  }

  removeUser(id: number): void{
    this.users = this.users.filter(user => user.id != id);
  }

  setSelectedUser(userRow: User): void{
    this.userSelected = {... userRow};
  }
}
