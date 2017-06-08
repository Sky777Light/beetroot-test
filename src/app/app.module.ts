import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {routing} from "./router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LocationPopupComponent } from './components/header/location-popup/location-popup.component';

import {StorageService} from "./services/storage.service";
import {AuthService} from "./services/auth.service";
import {ServCenterService} from "./services/serv-center.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LocationPopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
