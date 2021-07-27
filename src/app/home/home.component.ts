import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'cf-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.vikas').css('display','none');
  }

}
