import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalheMaquinaPage } from './detalhe-maquina.page';

describe('DetalheMaquinaPage', () => {
  let component: DetalheMaquinaPage;
  let fixture: ComponentFixture<DetalheMaquinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalheMaquinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
