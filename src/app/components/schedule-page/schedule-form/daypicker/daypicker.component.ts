import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-daypicker',
  templateUrl: './daypicker.component.html',
  styleUrls: ['./daypicker.component.sass']
})
export class DayPickerComponent {

  public days: any = [];
  public months:any = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public month: number = new Date().getMonth();
  public year: number = new Date().getFullYear();

  public selectedDate: number;

  @Input() timeStamp: number;
  @Output() timeStampChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(){
    this.selectedDate = this.timeStamp || new Date(this.year, this.month, new Date().getDate()).getTime();
    this.calendarGenerating();
  }

  calendarGenerating():void{

    let firstDayOfMonth = new Date(this.year, this.month, 1).getDay();
    let lastDateOfMonth =  new Date(this.year, this.month+1, 0).getDate();
    let lastDayOfLastMonth = this.month == 0 ? new Date(this.year-1, 11, 0).getDate() : new Date(this.year, this.month, 0).getDate();

    let i=1;
    this.days = [];

    do{
      let date = new Date(this.year, this.month, i);
      let dayName = date.getDay();
      let timeStamp = date.getTime();
      let day = {
        day: dayName,
        date: i,
        month: this.month,
        year: this.year,
        timeStamp: timeStamp
      };

      if ( i == 1 ) {
        let tempD = firstDayOfMonth, k;

        if(firstDayOfMonth == 0){
          k = lastDayOfLastMonth - 4;
          tempD = 7;
        } else {
          k = lastDayOfLastMonth - firstDayOfMonth+2;
        }

        for(let j=1; j < tempD; j++) {
          let month = this.month-1 < 0 ? 11 : this.month-1;
          let year = this.month-1 < 0 ? this.year - 1 : this.year;
          let dayName = new Date(year, month, k).getDay();
          let timeStamp = new Date(year, month, k).getTime();
          let day = {
            day: dayName,
            date: k,
            month: month,
            year: year,
            timeStamp: timeStamp
          };
          this.days.push(day);
          k++;
        }

      } else if ( i == lastDateOfMonth ) {
        this.days.push(day);

        if(dayName == 0) break;

        let date = 1;
        let tempmonth = this.month+1 > 11 ? 0 : this.month+1;
        let year = this.month+1 > 11 ? this.year + 1 : this.year;

        for(dayName+=1; dayName <= 7; dayName++) {
          let timeStamp = new Date(year, tempmonth, date).getTime();
          let tempday = {
            day: dayName,
            date: date,
            month: tempmonth,
            year: year,
            timeStamp: timeStamp
          };

          if(dayName == 7){
            tempday.day = 0;
            this.days.push(tempday);
            break;
          }

          this.days.push(tempday);
          date++;
        }

        break;
      }

      this.days.push(day);
      i++;
    } while (i <= lastDateOfMonth);

  }


  changeMonth(month: number){
    if(month === this.month) return;

    let diff = month - this.month;
    if (this.month + diff > 11) {
      this.month = 0;
      this.year = this.year + 1;
    } else if (this.month + diff < 0){
      this.month = 11;
      this.year = this.year - 1;
    } else {
      this.month += diff;
    }
    this.calendarGenerating();
  }

  selectDate(timeStamp: number, month: number){
    this.selectedDate = this.timeStamp = timeStamp;
    this.timeStampChange.emit(this.timeStamp);
    this.changeMonth(month);
  }
}
