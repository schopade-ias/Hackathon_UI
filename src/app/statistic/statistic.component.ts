import { Component, OnDestroy, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'cf-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit, OnDestroy {

  isStatistical: boolean = false;
  constructor() { }

  ngOnInit() {
    this.isStatistical = true;
    $('.vikas').css('display','block');
    $('.tableauPlaceholderoo').css('display','none');
  }
  ngOnDestroy(){
  this.isStatistical = false;
  }
}
