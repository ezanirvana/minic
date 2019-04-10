import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarPenyakitPage } from './daftar-penyakit.page';

describe('DaftarPenyakitPage', () => {
  let component: DaftarPenyakitPage;
  let fixture: ComponentFixture<DaftarPenyakitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarPenyakitPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarPenyakitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
