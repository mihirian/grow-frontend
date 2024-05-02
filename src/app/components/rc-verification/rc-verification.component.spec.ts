import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcVerificationComponent } from './rc-verification.component';

describe('RcVerificationComponent', () => {
  let component: RcVerificationComponent;
  let fixture: ComponentFixture<RcVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RcVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RcVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
