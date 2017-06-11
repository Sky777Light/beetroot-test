import { Component, OnInit } from '@angular/core';
import {ServiceCenterInterface} from "../../interfaces/service-center";
import {AuthService} from "../../services/auth.service";
import {ServCenterService} from "../../services/serv-center.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  public changeLocFlag: boolean = false;
  public serviceCenter: ServiceCenterInterface;
  
  constructor(
      private authService: AuthService,
      private servCenterService: ServCenterService
  ) {}

  ngOnInit() {
    this.serviceCenter = this.servCenterService.getServiceCenter();
    this.authService.get('/api/service-center').subscribe((res: any) => {
      res = res.json();
      if(res.status) {
        //change service center data
        this.servCenterService.setServiceCenter(res.serviceCenter);
      }
    }, (error) => {});
  }
  
}
