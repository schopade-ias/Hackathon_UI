import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { SignInData } from '../model/signInData';
import { Router } from '@angular/router';

@Component({
  selector: 'cf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isFormValid = false;
  areCredentialsInvalid = false;
  userInfo : any;
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(signInForm: NgForm) {
    if (!signInForm.valid) {
      this.isFormValid = true;
      this.areCredentialsInvalid = false;
      return;
    }
    this.checkCredentials(signInForm);

  }

  private checkCredentials(signInForm: NgForm) {
   // const signInData = new SignInData(signInForm.value.login, signInForm.value.password, signInForm.value.user);
  
    // if (!this.authenticationService.authenticate(signInData)) {
    //   this.isFormValid = false;
    //   this.areCredentialsInvalid = true;
    // }
    this.authenticationService.getloginDetails(signInForm).subscribe((res)=>{
      this.userInfo = res; 
      if(this.userInfo[0].id != null){
        this.authenticationService.isAuthenticated = true;
        this.router.navigate(['home']);
      }
     // console.log(this.userInfo);
   });     
  
  }
}
