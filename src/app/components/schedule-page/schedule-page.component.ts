import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.sass']
})
export class SchedulePageComponent implements OnInit {
  public specOffer: FormGroup;

  constructor(
      private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.specOffer = this._fb.group({
      Email: ['', [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]],
    });
  }


  sendForm(){
    this.specOffer.controls["Email"].markAsTouched({onlySelf: true});

    if (this.specOffer.valid) {
      console.log("Form Submitted!");
      this.specOffer.reset();
    }
  }
}
