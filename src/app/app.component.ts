import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  formGroup: FormGroup;
phone2: string = '12345';
  constructor(fb: FormBuilder) {
    this.formGroup = fb.group({
      phone: '+48666555444'
    });
  }

  ngOnInit(): void {
  }

  log(){
    console.log("phone", this.formGroup.value.phone);
    console.log("phone2", this.phone2);
  }

}
