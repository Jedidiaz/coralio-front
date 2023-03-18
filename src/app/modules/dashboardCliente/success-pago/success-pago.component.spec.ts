import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPagoComponent } from './success-pago.component';

describe('SuccessPagoComponent', () => {
  let component: SuccessPagoComponent;
  let fixture: ComponentFixture<SuccessPagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessPagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessPagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
