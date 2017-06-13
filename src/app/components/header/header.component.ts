import { Component, OnInit } from '@angular/core';
import {ServiceCenterInterface} from "../../interfaces/service-center";
import {AuthService} from "../../services/auth.service";
import {ServCenterService} from "../../services/serv-center.service";
import {StorageService} from "../../services/storage.service";

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
      private servCenterService: ServCenterService,
      private storageService: StorageService
  ) {}

  ngOnInit() {
    this.serviceCenter = this.servCenterService.getServiceCenter();
    
    //get service center data
    this.authService.post('/api/service-center', {id: this.storageService.get('serviceCenter')}).subscribe((res: any) => {
      res = res.json();
      if(res.status) {
        //change service center data
        this.servCenterService.setServiceCenter(res.ServiceCenter);
      }
    }, (error) => {});
  }
  
}
