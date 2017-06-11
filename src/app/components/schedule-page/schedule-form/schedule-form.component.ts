import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.sass']
})
export class ScheduleFormComponent implements OnInit {

  public myForm: FormGroup;

  public workTimeArr = [[8,8.5],[8.5,9],[9,9.5],[9.5,10],[10,10.5],[10.5,11]];

  public date1: any = {
    select: {
      time: false,
      date: false
    },
    data: {
      time: {
        from: null,
        to: null
      },
      date: null
    },
    resol: {
      time: true,
      date: true
    }
  };
  public date2: any = {
    select: {
      time: false,
      date: false
    },
    data: {
      time: {
        from: null,
        to: null
      },
      date: null
    }
  };

  constructor(
      private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      date1: this._fb.group({
        from: [this.date1.data.date + this.date1.data.time.from],
        to: [this.date1.data.date + this.date1.data.time.to]
      }),
      date2: this._fb.group({
        from: [this.date2.data.date + this.date2.data.time.from],
        to: [this.date2.data.date + this.date2.data.time.to]
      })
    });

  }

  selectTime(from: number, to: number, date: any){
    date.data.time.from = from;
    date.data.time.to = to;
  }

  closeAllTabs(){
    this.date1.select.date = false;
    this.date1.select.time = false;
    this.date2.select.date = false;
    this.date2.select.time = false;
  }

  clickon(){
    console.log(this.myForm);
  }
}
