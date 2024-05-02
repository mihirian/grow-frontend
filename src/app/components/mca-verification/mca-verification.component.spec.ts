import { ComponentFixture, TestBed } from '@angular/core/testing';

import { McaVerificationComponent } from './mca-verification.component';

describe('McaVerificationComponent', () => {
  let component: McaVerificationComponent;
  let fixture: ComponentFixture<McaVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [McaVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(McaVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
