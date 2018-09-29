import { User } from './../../../shared/models/user.model';
import { SessionService } from './../../../shared/services/session.service';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  

  constructor(private sessionService: SessionService, private router: Router) { }

  ngOnInit() {
  }

  userLogin(user: User){

    this.sessionService.authenticate(user).subscribe(() => {
     
      this.router.navigate(['/users']);

    })
  

  }


}
