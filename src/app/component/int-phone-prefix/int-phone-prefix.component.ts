import {Component, ElementRef, forwardRef, HostListener, Input, OnInit} from "@angular/core";
import {Country} from "../../interface/country.interface";
import {CountryService} from "../../country.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import * as _ from "lodash";
import {LocaleService} from "../../locale.service";
import {CountryCode} from "../../interface/country-code.interface";

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
  host: {
    '(document:click)': 'hideDropdown($event)',
  },
  providers: [COUNTER_CONTROL_ACCESSOR, CountryService, LocaleService]
})
export class IntPhonePrefixComponent implements OnInit, ControlValueAccessor {

  @Input()
  locale: string;

  phoneComponent: ElementRef;

  private onTouch: Function;
  private onModelChange: Function;

  countries: Country[];
  locales: CountryCode;

  selectedCountry: Country;

  countryFilter: string;
  showDropdown: boolean = false;

  value: string = '';
  phoneInput: string;

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (this.showDropdown) {
      this.countryFilter = `${this.countryFilter}${event.key}`;
    }

  }

  constructor(private service: CountryService, private localeService: LocaleService, phoneComponent: ElementRef) {
    this.phoneComponent = phoneComponent;
  }

  ngOnInit(): void {
    this.countries = this.service.getCountries();
    this.locales = this.localeService.getLocales(this.locale);
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

  updateSelectedCountry(event, countryCode) {
    event.preventDefault();
    this.showDropdown = false;
    let newInputValue: string = this.startsWithPlus(this.phoneInput)
      ? `${this.phoneInput.split(PLUS)[1].substr(this.selectedCountry.dialCode.length, this.phoneInput.length)}`
      : this.phoneInput;

    this.selectedCountry = this.countries.find((country: Country) => country.countryCode === countryCode);
    this.phoneInput = `${PLUS}${this.selectedCountry.dialCode}${newInputValue}`;

    this.updateValue();
  }

  showDropDown() {
    this.showDropdown = !this.showDropdown;
    this.countryFilter = '';
  }

  hideDropdown(event) {
      if (!this.phoneComponent.nativeElement.contains(event.target)) {
        this.showDropdown = false;
      }
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
      country.name = this.locales[country.countryCode];
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
