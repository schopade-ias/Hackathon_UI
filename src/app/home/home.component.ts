import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo: any;
  isEmployee: boolean = false;
  role: any;


  constructor(private authenticationService: AuthenticationService) {
    this.role = this.authenticationService.userInfo[0].role;
   }

  ngOnInit() {
    $('.vikas').css('display','none');
    this.userInfo = this.authenticationService.userInfo;
    // if(this.authenticationService.userInfo[0].role === 'Employee'){
    //   this.isEmployee = true;
    // }

  }

  

}
