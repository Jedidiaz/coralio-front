import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTerapeutaComponent } from './main-terapeuta.component';

describe('MainTerapeutaComponent', () => {
  let component: MainTerapeutaComponent;
  let fixture: ComponentFixture<MainTerapeutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainTerapeutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
