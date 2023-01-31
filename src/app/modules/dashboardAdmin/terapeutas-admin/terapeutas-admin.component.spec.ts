import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapeutasAdminComponent } from './terapeutas-admin.component';

describe('TerapeutasAdminComponent', () => {
  let component: TerapeutasAdminComponent;
  let fixture: ComponentFixture<TerapeutasAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapeutasAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapeutasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
