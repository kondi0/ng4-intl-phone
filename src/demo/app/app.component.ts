import {Component, OnInit} from '@angular/core';
import { CountryService } from 'quickstart-lib';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'demo-app',
  template: `
    <int-phone-prefix [(ngModel)]="phoneValue"></int-phone-prefix>
    <h3>The phone number is: {{phoneValue}}</h3>
    <form [formGroup]="myForm" (ngSubmit)="logForm(myForm.value)" novalidate>
    <int-phone-prefix [locale]="'es'"
                    formControlName="myPhone"></int-phone-prefix>
                    <button class="btn btn-main">Submit</button>
</form>
  `,
})
export class AppComponent implements OnInit{
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
