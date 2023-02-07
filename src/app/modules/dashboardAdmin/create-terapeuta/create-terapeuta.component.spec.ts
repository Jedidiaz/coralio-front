import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTerapeutaComponent } from './create-terapeuta.component';

describe('CreateTerapeutaComponent', () => {
  let component: CreateTerapeutaComponent;
  let fixture: ComponentFixture<CreateTerapeutaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateTerapeutaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTerapeutaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
