import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarTComponent } from './bar-t.component';

describe('BarTComponent', () => {
  let component: BarTComponent;
  let fixture: ComponentFixture<BarTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarTComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
