import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailCheckerVerificationComponent } from './email-checker-verification.component';

describe('EmailCheckerVerificationComponent', () => {
  let component: EmailCheckerVerificationComponent;
  let fixture: ComponentFixture<EmailCheckerVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmailCheckerVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailCheckerVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
