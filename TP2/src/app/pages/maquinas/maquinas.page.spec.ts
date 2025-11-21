import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaquinasPage } from './maquinas.page';

describe('MaquinasPage', () => {
  let component: MaquinasPage;
  let fixture: ComponentFixture<MaquinasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MaquinasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
