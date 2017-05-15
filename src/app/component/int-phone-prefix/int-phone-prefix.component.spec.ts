import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntPhonePrefixComponent } from './int-phone-prefix.component';

describe('IntPhonePrefixComponent', () => {
  let component: IntPhonePrefixComponent;
  let fixture: ComponentFixture<IntPhonePrefixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntPhonePrefixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntPhonePrefixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
