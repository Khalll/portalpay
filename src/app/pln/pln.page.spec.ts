import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlnPage } from './pln.page';

describe('PlnPage', () => {
  let component: PlnPage;
  let fixture: ComponentFixture<PlnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
