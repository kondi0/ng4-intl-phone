import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Http, HttpModule} from '@angular/http';
import {DropdownModule} from 'primeng/primeng'
import { AppComponent } from './app.component';
import { Ng2DropdownModule } from 'ng2-material-dropdown';
import {MdInputModule} from "@angular/material";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { CountryPipe } from './pipe/country.pipe';
import { OnlyNumberDirective } from './directive/only-number.directive';
import { IntPhonePrefixComponent } from './component/int-phone-prefix/int-phone-prefix.component';

export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    CountryPipe,
    OnlyNumberDirective,
    IntPhonePrefixComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DropdownModule,
    Ng2DropdownModule,
    MdInputModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
  ],
  exports: [IntPhonePrefixComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
