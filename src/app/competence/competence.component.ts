import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cf-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {

  userInfo: any; 

  constructor() { }

  ngOnInit() {
    this.userInfo = {
      name: "Joey Tribianni",
      OverallExperience: 5,
      domainExpertise: '',
      



    }
  }

}
