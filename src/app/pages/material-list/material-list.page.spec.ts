import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialListPage } from './material-list.page';

describe('MaterialListPage', () => {
  let component: MaterialListPage;
  let fixture: ComponentFixture<MaterialListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
