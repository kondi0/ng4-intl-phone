import {Component, OnInit} from '@angular/core';
import {CountryService} from 'quickstart-lib';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'demo-app',
    template: `
<div class="row mc">
<div class="card">
    <div class="row">
        <div class="col-md-6">
            <int-phone-prefix [(ngModel)]="phoneValue"></int-phone-prefix>
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
    </form>
</div>
  `,
})
export class AppComponent implements OnInit {
    phoneValue: string;
    private myForm: FormGroup;

    constructor(libService: CountryService,
                private formBuilder: FormBuilder) {
        this.phoneValue = '123345456';
    }


    ngOnInit() {
        this.myForm = this.formBuilder.group({
            myPhone: ['', Validators.required]
        });
    }

    logForm(value: any) {
        console.log(value);
    }
}
