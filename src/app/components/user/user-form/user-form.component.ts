import { SessionService } from './../../../shared/services/session.service';
import { UsersService } from './../../../shared/services/users.service';
import { User } from './../../../shared/models/user.model';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() userSubmit: EventEmitter<User> = new EventEmitter();

  user: User = new User();

  constructor(
    private usersService: UsersService,
    private sessionService: SessionService) { }

  ngOnInit() {
  }

  onSubmit():void{
    console.log('THIS.USER', this.user);
    this.userSubmit.emit(this.user);
  }

}
