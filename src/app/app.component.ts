import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import $ from 'jquery';

@Component({
  selector: 'cf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'login-form';

  ngOnInit(){
    //$('.vikas').css('display','none');
  }

  constructor(private authenticationService: AuthenticationService) { }

  logout() {
    this.authenticationService.logout();
  }
}
