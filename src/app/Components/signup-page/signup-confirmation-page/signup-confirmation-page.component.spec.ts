import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupConfirmationPageComponent } from './signup-confirmation-page.component';

describe('SignupConfirmationPageComponent', () => {
  let component: SignupConfirmationPageComponent;
  let fixture: ComponentFixture<SignupConfirmationPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupConfirmationPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupConfirmationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
