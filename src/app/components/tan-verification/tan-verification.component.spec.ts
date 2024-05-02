import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanVerificationComponent } from './tan-verification.component';

describe('TanVerificationComponent', () => {
  let component: TanVerificationComponent;
  let fixture: ComponentFixture<TanVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TanVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TanVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
