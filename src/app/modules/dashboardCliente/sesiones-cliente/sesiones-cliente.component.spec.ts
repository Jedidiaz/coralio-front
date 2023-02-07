import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionesClienteComponent } from './sesiones-cliente.component';

describe('SesionesClienteComponent', () => {
  let component: SesionesClienteComponent;
  let fixture: ComponentFixture<SesionesClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionesClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SesionesClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
