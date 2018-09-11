import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalListPage } from './normal-list.page';

describe('NormalListPage', () => {
  let component: NormalListPage;
  let fixture: ComponentFixture<NormalListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
