import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {CountryPipe} from "./pipe/country.pipe";
import {OnlyNumberDirective} from "./directive/only-number.directive";
import {IntPhonePrefixComponent} from "./component/int-phone-prefix/int-phone-prefix.component";
import {BrowserModule} from "@angular/platform-browser";


@NgModule({
  declarations: [
    AppComponent,
    CountryPipe,
    OnlyNumberDirective,
    IntPhonePrefixComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],
  exports: [IntPhonePrefixComponent],
})
export class InternationalPhoneModule { }
