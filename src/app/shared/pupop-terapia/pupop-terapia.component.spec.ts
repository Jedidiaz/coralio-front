import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupopTerapiaComponent } from './pupop-terapia.component';

describe('PupopTerapiaComponent', () => {
  let component: PupopTerapiaComponent;
  let fixture: ComponentFixture<PupopTerapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupopTerapiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PupopTerapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
