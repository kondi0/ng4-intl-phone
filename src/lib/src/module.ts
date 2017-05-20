import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IntPhonePrefixComponent} from "./component/int-phone-prefix/int-phone-prefix.component";
import {OnlyNumberDirective} from "./directive/only-number.directive";
import {CountryPipe} from "./pipe/country.pipe";
import {CountryService} from "./service/country.service";
import {LocaleService} from "./service/locale.service";



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    IntPhonePrefixComponent,
    OnlyNumberDirective,
    CountryPipe
  ],
  exports: [
    IntPhonePrefixComponent
  ],
  providers: [CountryService, LocaleService]
})
export class InternationalPhoneModule {}
