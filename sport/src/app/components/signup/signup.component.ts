import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm!: FormGroup

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(3)]],
      lastName: ["", [Validators.required, Validators.minLength(5)]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      password: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(8)]]
    })
  }

  signup() {
    console.log("Here user",this.signupForm.value)
    this.signupForm.value.roles = ["admin", "manager"]
    this.userService.signup(this.signupForm.value).subscribe(
      (response) => { 
        console.log("Here response after signup", response)
      }
    )
  }

}
