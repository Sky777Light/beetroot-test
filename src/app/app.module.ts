import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AgmCoreModule} from "angular2-google-maps/core";

import {routing} from "./router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationPopupComponent } from './components/header/location-popup/location-popup.component';
import { SchedulePageComponent } from './components/schedule-page/schedule-page.component';

import {StorageService} from "./services/storage.service";
import {AuthService} from "./services/auth.service";
import {ServCenterService} from "./services/serv-center.service";
import { ScheduleFormComponent } from './components/schedule-page/schedule-form/schedule-form.component';
import {DayPickerComponent} from "./components/schedule-page/schedule-form/daypicker/daypicker.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationPopupComponent,
    SchedulePageComponent,
    ScheduleFormComponent,
    DayPickerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AgmCoreModule.forRoot(),
    routing
  ],
  providers: [
    StorageService,
    AuthService,
    ServCenterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
