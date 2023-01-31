import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarAComponent } from './bar-a.component';

describe('BarAComponent', () => {
  let component: BarAComponent;
  let fixture: ComponentFixture<BarAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
