import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiasClienteComponent } from './terapias-cliente.component';

describe('TerapiasClienteComponent', () => {
  let component: TerapiasClienteComponent;
  let fixture: ComponentFixture<TerapiasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapiasClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
