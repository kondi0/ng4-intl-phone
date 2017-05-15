import {Component, forwardRef, HostListener, OnInit} from "@angular/core";
import {Country} from "../../interface/country.interface";
import {CountryService} from "../../country.service";
import {TranslateService} from "@ngx-translate/core";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import * as _ from "lodash";

const COUNTER_CONTROL_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => IntPhonePrefixComponent),
  multi: true
};

const PLUS: string = "+";

@Component({
  selector: 'int-phone-prefix',
  templateUrl: './int-phone-prefix.component.html',
  styleUrls: ['./int-phone-prefix.component.scss'],
  providers: [COUNTER_CONTROL_ACCESSOR, CountryService]
})
export class IntPhonePrefixComponent implements OnInit, ControlValueAccessor {

  private onTouch: Function;
  private onModelChange: Function;

  countries: Country[];

  selectedCountry: Country;

  countryFilter: string;
  activateCountryFilter: boolean;

  value: string = '';
  phoneInput: string;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.activateCountryFilter) {
      this.countryFilter = `${this.countryFilter}${event.key}`;
    }

  }

  constructor(private service: CountryService, private translate: TranslateService) {
    translate.setDefaultLang('es');
    translate.use('es');
  }

  ngOnInit(): void {
    this.countries = this.service.getCountries();
    this.translateCountryNames();
  }

  registerOnTouched(fn) {
    this.onTouch = fn;
  }

  registerOnChange(fn) {
    this.onModelChange = fn;
  }

  writeValue(value) {
    this.value = value || '';

    if (this.startsWithPlus(this.value)) {
      this.findPrefix(this.value.split(PLUS)[1]);
    }

    this.phoneInput = value;
  }

  updateSelectedCountry(event) {
    let newInputValue: string = this.startsWithPlus(this.phoneInput)
      ? `${this.phoneInput.split(PLUS)[1].substr(this.selectedCountry.dialCode.length, this.phoneInput.length)}`
      : this.phoneInput;

    this.selectedCountry = this.countries.find((country: Country) => country.countryCode === event.value);
    this.phoneInput = `${PLUS}${this.selectedCountry.dialCode}${newInputValue}`;

    this.updateValue();
  }

  activateFilter(activate: boolean) {
    this.activateCountryFilter = activate;
    this.countryFilter = '';
  }

  updatePhone() {
    if (this.startsWithPlus(this.phoneInput)) {
      this.findPrefix(this.phoneInput.split(PLUS)[1]);
    } else {
      this.selectedCountry = null;
    }

    this.updateValue();
  }

  private translateCountryNames() {
    this.countries.forEach((country: Country) => {
      this.translate.get(country.countryCode).subscribe((countryName: string) => {
        country.name = countryName;
      });
    });
  }

  private findPrefix(prefix: string) {
    let foundPrefixes: Country[] = this.countries.filter((country: Country) => prefix.startsWith(country.dialCode));
    this.selectedCountry = !_.isEmpty(foundPrefixes)
      ? this.reducePrefixes(foundPrefixes)
      : null;
  }

  private reducePrefixes(foundPrefixes: Country[]) {
    return foundPrefixes.reduce(
      (first: Country, second: Country) =>
        first.dialCode.length > second.dialCode.length
          ? first
          : second
    );
  }

  private updateValue() {
    this.value = this.phoneInput;
    this.onModelChange(this.value);
    this.onTouch();
  }

  private startsWithPlus(text: string): boolean {
    return text.startsWith(PLUS);
  }
}
