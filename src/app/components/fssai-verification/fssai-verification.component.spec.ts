import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FssaiVerificationComponent } from './fssai-verification.component';

describe('FssaiVerificationComponent', () => {
  let component: FssaiVerificationComponent;
  let fixture: ComponentFixture<FssaiVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FssaiVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FssaiVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
