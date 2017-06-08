import { Injectable } from '@angular/core';
import {StorageService} from "./storage.service";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";
import {ServiceCenterInterface} from "../interfaces/service-center";
import {ServiceCenterClass} from "../classes/service-center";

@Injectable()
export class ServCenterService {

  // create temporary service data
  public serviceCenter: ServiceCenterInterface = new ServiceCenterClass(null,'(801) 783.32.80', '',  '3692 West 5400 South','Taylorsville', 84129, 'UT');

  constructor(
      private storageService: StorageService,
      private authService: AuthService,
      private router: Router
  ) {}

  setServiceCenter(center: ServiceCenterInterface): void {
    for(let key in center){
      this.serviceCenter[key] = center[key];
    }
  }

  getServiceCenter(){
    return this.serviceCenter;
  }
  
}
