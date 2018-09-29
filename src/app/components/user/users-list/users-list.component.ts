import { UsersService } from './../../../shared/services/users.service';
import { User } from './../../../shared/models/user.model';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[] = []; 

  constructor( private userService: UsersService) { }

  ngOnInit() {
    this.userService.list().subscribe((users) => {
      this.users = users;
    }); 

  }

}
