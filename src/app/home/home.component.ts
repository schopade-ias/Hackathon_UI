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


  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    $('.vikas').css('display','none');
    this.userInfo = this.authenticationService.userInfo;
  }

  

}
