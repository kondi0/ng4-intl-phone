import { Component } from '@angular/core';
import { CountryService } from 'quickstart-lib';

@Component({
  selector: 'demo-app',
  template: `
    <int-phone-prefix [(ngModel)]="meaning"></int-phone-prefix>
    <h3>Meaning is: {{meaning}}</h3>
  `,
})
export class AppComponent {
  meaning: any;
  constructor(libService: CountryService) {
    this.meaning = '123345456';
  }
}
