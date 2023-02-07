import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CerateTerapiaComponent } from './cerate-terapia.component';

describe('CerateTerapiaComponent', () => {
  let component: CerateTerapiaComponent;
  let fixture: ComponentFixture<CerateTerapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CerateTerapiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CerateTerapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
