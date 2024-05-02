import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopEstablishmentVerificationComponent } from './shop-establishment-verification.component';

describe('ShopEstablishmentVerificationComponent', () => {
  let component: ShopEstablishmentVerificationComponent;
  let fixture: ComponentFixture<ShopEstablishmentVerificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShopEstablishmentVerificationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShopEstablishmentVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
