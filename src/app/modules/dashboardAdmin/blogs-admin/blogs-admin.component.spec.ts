import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsAdminComponent } from './blogs-admin.component';

describe('BlogsAdminComponent', () => {
  let component: BlogsAdminComponent;
  let fixture: ComponentFixture<BlogsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
