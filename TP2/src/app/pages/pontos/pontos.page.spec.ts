import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontosPage } from './pontos.page';

describe('PontosPage', () => {
  let component: PontosPage;
  let fixture: ComponentFixture<PontosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PontosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
