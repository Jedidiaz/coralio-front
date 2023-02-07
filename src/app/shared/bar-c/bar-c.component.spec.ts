import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarCComponent } from './bar-c.component';

describe('BarCComponent', () => {
  let component: BarCComponent;
  let fixture: ComponentFixture<BarCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
