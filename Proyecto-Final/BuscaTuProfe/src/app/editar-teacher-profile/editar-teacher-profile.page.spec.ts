import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTeacherProfilePage } from './editar-teacher-profile.page';

describe('EditarTeacherProfilePage', () => {
  let component: EditarTeacherProfilePage;
  let fixture: ComponentFixture<EditarTeacherProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarTeacherProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarTeacherProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
