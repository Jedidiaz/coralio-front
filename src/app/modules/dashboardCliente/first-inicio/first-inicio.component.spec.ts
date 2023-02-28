import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstInicioComponent } from './first-inicio.component';

describe('FirstInicioComponent', () => {
  let component: FirstInicioComponent;
  let fixture: ComponentFixture<FirstInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FirstInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FirstInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
