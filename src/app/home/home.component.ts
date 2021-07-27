import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userInfo: any;

  constructor() { }

  ngOnInit() {
    $('.vikas').css('display','none');

    this.userInfo = {
      name: "Joey Tribianni",
      OverallExperience: 5,
      domainExpertise: ''



    }
  }

}
