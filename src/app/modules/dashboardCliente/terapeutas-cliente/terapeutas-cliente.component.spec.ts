import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutasClienteComponent } from './terapeutas-cliente.component';

describe('TerapeutasClienteComponent', () => {
  let component: TerapeutasClienteComponent;
  let fixture: ComponentFixture<TerapeutasClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapeutasClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeutasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
