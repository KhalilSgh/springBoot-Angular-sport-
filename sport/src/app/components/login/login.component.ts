import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any = {}

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login(){
    console.log("Here user", this.user)
    this.userService.login(this.user).subscribe(
      (response)=>{
        console.log("Response after login", response)
      }
    )
  }

}
