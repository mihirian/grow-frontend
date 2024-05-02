import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IecVerificationComponent } from './iec-verification.component';

describe('IecVerificationComponent', () => {
  let component: IecVerificationComponent;
  let fixture: ComponentFixture<IecVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IecVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IecVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
