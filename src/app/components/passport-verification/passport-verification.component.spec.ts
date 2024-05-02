import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassportVerificationComponent } from './passport-verification.component';

describe('PassportVerificationComponent', () => {
  let component: PassportVerificationComponent;
  let fixture: ComponentFixture<PassportVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PassportVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PassportVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
