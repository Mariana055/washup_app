import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PagamentoSucessoPage } from './pagamento-sucesso.page';

describe('PagamentoSucessoPage', () => {
  let component: PagamentoSucessoPage;
  let fixture: ComponentFixture<PagamentoSucessoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PagamentoSucessoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
