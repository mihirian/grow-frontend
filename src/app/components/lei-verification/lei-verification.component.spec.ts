import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeiVerificationComponent } from './lei-verification.component';

describe('LeiVerificationComponent', () => {
  let component: LeiVerificationComponent;
  let fixture: ComponentFixture<LeiVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LeiVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LeiVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
