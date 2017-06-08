import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-location-popup',
  templateUrl: './location-popup.component.html',
  styleUrls: ['./location-popup.component.sass']
})
export class LocationPopupComponent implements OnInit {

  @Input() changeLocFlag: boolean;
  @Output() changeLocFlagChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {}

  changeLocation(){
    //request to change service center and then destroy component

    this.changeLocFlag = false;
    this.changeLocFlagChange.emit(this.changeLocFlag);
  }

  getDirection(){

  }
}
