import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {ServiceCenterInterface} from "../../../interfaces/service-center";
import {ServCenterService} from "../../../services/serv-center.service";

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.sass']
})
export class LocationPopupComponent implements OnInit {

  @Input() changeLocFlag: boolean;
  @Output() changeLocFlagChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private serviceCenter: ServiceCenterInterface;

  constructor(
      private servCenterService: ServCenterService
  ) {
    this.serviceCenter = this.servCenterService.getServiceCenter();
  }

  ngOnInit() {

  }

  changeLocation(){
    //request to change service center and then destroy component

    this.changeLocFlag = false;
    this.changeLocFlagChange.emit(this.changeLocFlag);
  }

  getDirection(){

  }
}
