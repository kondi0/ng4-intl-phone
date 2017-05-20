import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InternationalPhoneModule } from 'quickstart-lib';

import { AppComponent }  from './app.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  imports:      [ BrowserModule, InternationalPhoneModule, FormsModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
