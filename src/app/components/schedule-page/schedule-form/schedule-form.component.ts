import {Component, OnInit, ViewChildren, QueryList, ElementRef} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators, FormArray} from '@angular/forms';

declare var alertify;

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.sass']
})
export class ScheduleFormComponent implements OnInit {

  @ViewChildren('ckbx') ckbxArr: QueryList<ElementRef>;
  public myForm: FormGroup;

  public workTimeArr: any = [
    [8*3600000,8.5*3600000],
    [8.5*3600000,9*3600000],
    [9*3600000,9.5*3600000],
    [9.5*3600000,10*3600000],
    [10*3600000,10.5*3600000],
    [10.5*3600000,11*3600000]
  ];
  public timeZone: number = new Date().getTimezoneOffset()*60000;

  public Services: any = [{id: 1, Name: 'Transmission'},{id: 2, Name: 'Vehicle Maintenance'},{id: 3, Name: 'Vehicle Rapair'},{id: 4, Name: 'Other'}];
  public Vehicles: any = [{id: 1, Name: 'Toyota'},{id: 2, Name: 'Mercedes'},{id: 3, Name: 'Audi'},{id: 4, Name: 'Bentley'}];

  public formData: any = {
    date1: {
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
    },
    date2: {
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
    },
    vehicle: {
      select: false,
      id: null,
      name: ''
    }
  };

  constructor(
      private _fb: FormBuilder
  ) { }

  ngOnInit() {
    this.myForm = this._fb.group({
      DateFromFirst: [this.formData.date1.data.date + this.formData.date1.data.time.from],
      DateToFirst: [this.formData.date1.data.date + this.formData.date1.data.time.to],
      DateFromSecond: [this.formData.date2.data.date + this.formData.date2.data.time.from],
      DateToSecond: [this.formData.date2.data.date + this.formData.date2.data.time.to],
      ServiceList: this._fb.array([]),
      YearOfCar: [null],
      CarId: [this.formData.vehicle.id],
      Message: [''],
      FirstName: ['', [Validators.required]],
      SecondName: [''],
      Email: ['', [ Validators.required, Validators.pattern("[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}")]],
      Phone: [null]
    });


  //build alertify popup

    alertify.dialog('afterSubmit', () => {
      return {
        main: function (message) {
          this.message = message;
        },
        setup: function () {
          return {
            options: {
              movable: false,
              frameless: true,
              resizable: false,
              transition: "zoom"
            }
          };
        },
        hooks:{
          onshow: function(){
            setTimeout(()=>this.close(), 2000);
          }
        },
        prepare: function () {
          this.setContent(this.message);
        }
      }
    });

  }

  selectTime(from: number, to: number, date: any){
    date.data.time.from = from;
    date.data.time.to = to;
  }

  closeAllTabs(){
    this.formData.date1.select.date = false;
    this.formData.date1.select.time = false;
    this.formData.date2.select.date = false;
    this.formData.date2.select.time = false;
    this.formData.vehicle.select = false;
  }


  changeCkbx(service:string, ckbx:any){
    ckbx.checked = !ckbx.checked;
    const serviceFormArray = <FormArray>this.myForm.controls["ServiceList"];

    if(ckbx.checked) {
      serviceFormArray.push(new FormControl(service));
    } else {
      let index = serviceFormArray.controls.findIndex(x => x.value == service);
      serviceFormArray.removeAt(index);
    }
  }

  clearForm(){
    this.formData.date1.data.time.from = null;
    this.formData.date1.data.time.to = null;
    this.formData.date1.data.date = null;
    this.formData.date1.resol.date = true;
    this.formData.date1.resol.time = true;
    this.formData.date2.data.time.from = null;
    this.formData.date2.data.time.to = null;
    this.formData.date2.data.date = null;
    this.formData.vehicle.id = null;
    this.formData.vehicle.name = '';
    this.myForm.reset();

    this.ckbxArr.map(ckbx => ckbx.nativeElement["checked"] = false);
  }

  checkResol(){
    !this.formData.date1.data.date ?  this.formData.date1.resol.date = false : null;
    !this.formData.date1.data.time.from ?  this.formData.date1.resol.time = false : null;

    if(this.formData.date1.resol.date || this.formData.date1.resol.time) return false;

    return true;
  }

  sendForm(){
    let resol = this.checkResol();

    Object.keys(this.myForm.controls).map((controlName) => {
      this.myForm.get(controlName).markAsTouched({onlySelf: true});
    });

    if(!resol)return;

    if (this.myForm.valid) {
      alertify.afterSubmit("Thank's for using our service");
      this.clearForm();
    }
  }
}
