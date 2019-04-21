import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfilePage } from './new-profile.page';

describe('NewProfilePage', () => {
  let component: NewProfilePage;
  let fixture: ComponentFixture<NewProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
