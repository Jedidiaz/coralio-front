import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerTerapeutaComponent } from './ver-terapeuta.component';

describe('VerTerapeutaComponent', () => {
  let component: VerTerapeutaComponent;
  let fixture: ComponentFixture<VerTerapeutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerTerapeutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
