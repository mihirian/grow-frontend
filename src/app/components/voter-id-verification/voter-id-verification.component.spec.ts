import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoterIdVerificationComponent } from './voter-id-verification.component';

describe('VoterIdVerificationComponent', () => {
  let component: VoterIdVerificationComponent;
  let fixture: ComponentFixture<VoterIdVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VoterIdVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VoterIdVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
