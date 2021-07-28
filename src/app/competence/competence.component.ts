import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'cf-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  userInfo: any; 

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.userInfo = this.authenticationService.userInfo;
  }

}
