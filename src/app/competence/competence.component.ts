import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'cf-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  userInfo: any; 
  isEmployee: boolean = false;
  role: any;

  constructor(private authenticationService: AuthenticationService) { 
    this.role = this.authenticationService.userInfo[0].role;
  }

  ngOnInit() {
    this.userInfo = this.authenticationService.userInfo;
   
    if(this.authenticationService.userInfo[0].role === 'Employee'){
      this.isEmployee = true;
    }
  }

}
