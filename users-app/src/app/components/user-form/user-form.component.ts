import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/user';

@Component({
  selector: 'user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  user: User;

  @Output() newUserEventEmitter: EventEmitter<User> = new EventEmitter<User>();

  constructor(){
    this.user = new User();
  }

  onSubmit(): void {
    this.newUserEventEmitter.emit(this.user);
    console.log(this.user);
  }
}