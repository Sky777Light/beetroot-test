import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {ServiceCenterInterface} from "../../../interfaces/service-center";
import {ServCenterService} from "../../../services/serv-center.service";
import {AuthService} from "../../../services/auth.service";
import {StorageService} from "../../../services/storage.service";

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.sass']
})
export class LocationPopupComponent implements OnInit {

  @Input() changeLocFlag: boolean;
  @Output() changeLocFlagChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() serviceCenter: ServiceCenterInterface;


  constructor(
      private servCenterService: ServCenterService,
      private authService: AuthService,
      private storageService: StorageService
  ) {  }

  ngOnInit() {

  }

  changeLocation(){
    //request to change service center and then destroy component

    this.authService.post('/api/service-center', {id: "newId"}).subscribe((res: any) => {
      res = res.json();
      if(res.status) {
        //change service center data
        this.servCenterService.setServiceCenter(res.ServiceCenter);

        //set new serviceCenter to localStorage
        this.storageService.set('serviceCenter', res.ServiceCenter.id);

        //close location popup
        this.changeLocFlag = false;
        this.changeLocFlagChange.emit(this.changeLocFlag);
      }
    }, (error) => {});

  }

  getDirection(){
      
  }
}
