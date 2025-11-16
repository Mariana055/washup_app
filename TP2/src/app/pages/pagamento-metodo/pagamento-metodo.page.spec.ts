import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagamentoMetodoPage } from './pagamento-metodo.page';

describe('PagamentoMetodoPage', () => {
  let component: PagamentoMetodoPage;
  let fixture: ComponentFixture<PagamentoMetodoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoMetodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
