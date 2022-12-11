import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AuthenticationService} from "../../services/Authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup!:FormGroup;
  errorMessage:any;

  constructor(private fb:FormBuilder,
              private authService : AuthenticationService,
              private router:Router) { }

  ngOnInit(): void {
    this.userFormGroup=this.fb.group(
      {
        username:this.fb.control("admin"),
        password:this.fb.control("1234")
      }
    )
  }

  handleLogin() {
    let username=this.userFormGroup.value.username;
    let password=this.userFormGroup.value.password;
    this.authService.login(username,password).subscribe({
      next:(data)=>{
        this.authService.authenticateUser(data).subscribe(
          {
            next:()=>{
                this.router.navigateByUrl("/admin")
            }
          }
        )
      },
      error:(err)=>{
        this.errorMessage=err;
      }
    })
  }
}
