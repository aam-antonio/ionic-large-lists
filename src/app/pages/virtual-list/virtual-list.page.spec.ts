import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VirtualListPage } from './virtual-list.page';

describe('VirtualListPage', () => {
  let component: VirtualListPage;
  let fixture: ComponentFixture<VirtualListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VirtualListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VirtualListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
