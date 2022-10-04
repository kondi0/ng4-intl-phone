import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CountryService} from '../../../lib/src/lib/service/country.service';

@Component({
    selector: 'app-root',
    template: `
<div class="row mc">
<div class="card">
    <div class="row">
        <div class="col-md-6">
            <int-phone-prefix [(ngModel)]="phoneValue"
                              [maxLength]="30"></int-phone-prefix>
        </div>
        <div class="col-md-6">
            <span>The phone number is: {{phoneValue}}</span>
        </div>
    </div>
    <form [formGroup]="myForm" (ngSubmit)="logForm(myForm.value)" novalidate>
        <div class="row mt">
            <div class="col-md-10">
                <int-phone-prefix [locale]="'es'"
                    formControlName="myPhone"></int-phone-prefix>
            </div>
            <div class="col-md-2">
               <button class="btn btn-primary">Submit</button>
            </div>
        </div>
        <div class="row mt">
            <div class="col-md-10">
                <int-phone-prefix [locale]="'es'"
                    formControlName="disabledPhone"></int-phone-prefix>
            </div>
        </div>
    </form>
</div></div>
  `,
})
export class AppComponent implements OnInit {
    phoneValue: string;
    myForm: FormGroup;

    constructor(libService: CountryService,
                private formBuilder: FormBuilder) {
        this.phoneValue = '123345456';
    }


    ngOnInit() {
        this.myForm = this.formBuilder.group({
            myPhone: ['', Validators.required],
            disabledPhone: ['']
        });

        this.myForm.get('disabledPhone').disable();
    }

    logForm(value: any) {
        console.log(value);
    }
}
