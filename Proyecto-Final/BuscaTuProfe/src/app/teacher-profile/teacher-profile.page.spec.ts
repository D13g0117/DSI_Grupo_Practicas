import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherProfilePage } from './teacher-profile.page';

describe('TeacherProfilePage', () => {
  let component: TeacherProfilePage;
  let fixture: ComponentFixture<TeacherProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
