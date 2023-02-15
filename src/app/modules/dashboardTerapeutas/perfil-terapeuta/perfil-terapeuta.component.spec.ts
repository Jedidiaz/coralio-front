import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilTerapeutaComponent } from './perfil-terapeuta.component';

describe('PerfilTerapeutaComponent', () => {
  let component: PerfilTerapeutaComponent;
  let fixture: ComponentFixture<PerfilTerapeutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilTerapeutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
