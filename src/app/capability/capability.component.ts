import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'cf-capability',
  templateUrl: './capability.component.html',
  styleUrls: ['./capability.component.scss']
})
export class CapabilityComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  //   this.authenticationService.getUserSkills(this.authenticationService.userInfo[0].id).subscribe((res)=>{
  //     console.log(res);
  //  });  
  }

}
