import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";

declare var alertify;

@Component({
  selector: 'app-schedule-page',
  templateUrl: './schedule-page.component.html',
  styleUrls: ['./schedule-page.component.sass']
})
export class SchedulePageComponent implements OnInit {
  public specOffer: FormGroup;

  constructor(
      private _fb: FormBuilder,
      private authService: AuthService
  ) { }

  ngOnInit() {
    this.specOffer = this._fb.group({
      Email: ['', [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]],
    });
  }


  sendForm(){
    this.specOffer.controls["Email"].markAsTouched({onlySelf: true});

    if (this.specOffer.valid) {

      this.authService.post('/api/subscribe', this.specOffer).subscribe((res: any) => {
        res = res.json();
        if(res.status) {
          alertify.success('Subscription complete!');
        } else {
          alertify.error('Error');
        }
      }, (error) => {});

      this.specOffer.reset();
    }
  }
}
