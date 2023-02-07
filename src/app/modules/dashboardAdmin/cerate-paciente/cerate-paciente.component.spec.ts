import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CeratePacienteComponent } from './cerate-paciente.component';

describe('CeratePacienteComponent', () => {
  let component: CeratePacienteComponent;
  let fixture: ComponentFixture<CeratePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CeratePacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CeratePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
