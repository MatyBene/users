import { Component, EventEmitter } from '@angular/core';
import { User } from '../../models/user';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'user',
  imports: [RouterModule],
  templateUrl: './user.component.html'
})
export class UserComponent {

  title: string = 'Listado de usuarios';
  
  users: User[] = [];

  idUserEventEmitter = new EventEmitter();

  selectedUserEventEmitter = new EventEmitter();

  constructor(private router: Router){
    this.users = this.router.getCurrentNavigation()?.extras.state!['users']
  }

  onRemoveUser(id: number): void{
    this.idUserEventEmitter.emit(id);
  }

  onSelectedUser(user: User): void{
    this.selectedUserEventEmitter.emit(user);
  }
}
