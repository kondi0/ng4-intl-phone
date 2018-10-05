import {Component, ElementRef, forwardRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {Country} from '../../interface/country.interface';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {CountryCode} from '../../interface/country-code.interface';
import {CountryService} from '../../service/country.service';
import {LocaleService} from '../../service/locale.service';
import * as _ from 'lodash';

const COUNTER_CONTROL_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => IntPhonePrefixComponent),
    multi: true
};

const PLUS = '+';

@Component({
    moduleId: module.id,
    selector: 'int-phone-prefix',
    templateUrl: './int-phone-prefix.component.html',
    styleUrls: [
        './int-phone-prefix.component.scss',
        '../../assets/flags/flags.min.css'
    ],
    host: {
        '(document:click)': 'hideDropdown($event)',
    },
    providers: [COUNTER_CONTROL_ACCESSOR, CountryService, LocaleService]
})
export class IntPhonePrefixComponent implements OnInit, ControlValueAccessor {

    @Input()
    locale: string;

    @Input()
    defaultCountry: string;

    @Input()
    maxLength = 15;

    @Input()
    onlyNumbers = true;
    
    @Input()
    placeHolder: string;

    // ELEMENT REF
    phoneComponent: ElementRef;

    // CONTROL VALUE ACCESSOR FUNCTIONS
    onTouch: Function;
    onModelChange: Function;

    countries: Country[];
    locales: CountryCode;
    selectedCountry: Country;
    countryFilter: string;
    showDropdown = false;
    phoneInput = '';
    disabled = false;

    value = '';

    // FILTER COUNTRIES LIST WHEN DROPDOWN IS OPEN
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

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }

    registerOnTouched(fn: Function) {
        this.onTouch = fn;
    }

    registerOnChange(fn: Function) {
        this.onModelChange = fn;
    }

    writeValue(value: string) {
        this.value = value || '';
        this.phoneInput = this.value;

        if (IntPhonePrefixComponent.startsWithPlus(this.value)) {
            this.findPrefix(this.value.split(PLUS)[1]);
            if (this.selectedCountry) {
                this.updatePhoneInput(this.selectedCountry.countryCode);
            }
        }

        if (this.defaultCountry) {
            this.updatePhoneInput(this.defaultCountry);
        }
    }

    updateSelectedCountry(event: Event, countryCode: string) {
        event.preventDefault();
        this.updatePhoneInput(countryCode);

        this.updateValue();
    }

    showDropDown() {
        this.showDropdown = !this.showDropdown;
        this.countryFilter = '';
    }

    hideDropdown(event: Event) {
        if (!this.phoneComponent.nativeElement.contains(event.target)) {
            this.showDropdown = false;
        }
    }

    updatePhone() {
        if (IntPhonePrefixComponent.startsWithPlus(this.phoneInput)) {
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

        this.orderCountriesByName();
    }

    private orderCountriesByName() {
        this.countries = _.sortBy(this.countries, 'name');
    }

    private updatePhoneInput(countryCode: string) {
        this.showDropdown = false;

        let newInputValue: string = IntPhonePrefixComponent.startsWithPlus(this.phoneInput)
            ? `${this.phoneInput.split(PLUS)[1].substr(this.selectedCountry.dialCode.length, this.phoneInput.length)}`
            : this.phoneInput;

        this.selectedCountry = this.countries.find((country: Country) => country.countryCode === countryCode);
        this.phoneInput = `${PLUS}${this.selectedCountry.dialCode} ${newInputValue.replace(/ /g, '')}`;
    }

    private findPrefix(prefix: string) {
        let foundPrefixes: Country[] = this.countries.filter((country: Country) => prefix.startsWith(country.dialCode));
        this.selectedCountry = !_.isEmpty(foundPrefixes)
            ? IntPhonePrefixComponent.reducePrefixes(foundPrefixes)
            : null;
    }

    private updateValue() {
        this.value = this.phoneInput.replace(/ /g, '');
        this.onModelChange(this.value);
        this.onTouch();
    }

    private static startsWithPlus(text: string): boolean {
        return text.startsWith(PLUS);
    }

    private static reducePrefixes(foundPrefixes: Country[]) {
        return foundPrefixes.reduce(
            (first: Country, second: Country) =>
                first.dialCode.length > second.dialCode.length
                    ? first
                    : second
        );
    }
}
