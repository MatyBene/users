import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SharingDataService } from '../services/sharing-data.service';

@Component({
  selector: 'user-app',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './user-app.component.html',
  styleUrls: ['./user-app.component.css']
})
export class UserAppComponent implements OnInit {

  users: User[] = [];

  userSelected: User;

  constructor(private service: UserService, private sharingData: SharingDataService) {
    this.userSelected = new User();
  }

  ngOnInit(): void {
    this.service.findAll().subscribe(users => this.users = users);
    this.addUser();
    this.setSelectedUser();
    this.removeUser();
  }
  
  addUser(){
    this.sharingData.newUserEventEmitter.subscribe(user => {
      if(user.id > 0){
        this.users = this.users.map(u => (u.id == user.id) ? {... user} : u);
      } else {
        this.users = [... this.users, { ... user, id: new Date().getTime() }];
      }
  
      Swal.fire({
        title: "Guardado",
        text: "Usuario guardado con exito",
        icon: "success"
      });
      
      this.userSelected = new User();
    })
  }

  removeUser(): void{
    this.sharingData.idUserEventEmitter.subscribe(id => {
      Swal.fire({
        title: "Seguro que quiere eliminar?",
        text: "Cuidado el usuario sera eliminado del sistema!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si!"
      }).then((result) => {
        if (result.isConfirmed) {
          this.users = this.users.filter(user => user.id != id);
  
          Swal.fire({
            title: "Eliminado!",
            text: "Usuario eliminado con exito.",
            icon: "success"
          });
        }
      });
    })
  }

  setSelectedUser(): void{
    this.sharingData.selectedUserEventEmitter.subscribe(userRow => this.userSelected = {... userRow});
  }
}
