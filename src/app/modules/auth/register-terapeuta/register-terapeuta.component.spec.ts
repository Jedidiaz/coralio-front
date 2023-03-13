import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterTerapeutaComponent } from './register-terapeuta.component';

describe('RegisterTerapeutaComponent', () => {
  let component: RegisterTerapeutaComponent;
  let fixture: ComponentFixture<RegisterTerapeutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterTerapeutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
