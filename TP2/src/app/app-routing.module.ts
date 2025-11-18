import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'mapa',
    loadComponent: () =>
      import('./pages/mapa/mapa.page').then(m => m.MapaPage)
  },
  {
    path: 'maquinas',
    loadComponent: () =>
      import('./pages/maquinas/maquinas.page').then(m => m.MaquinasPage)
  },
  {
    path: 'detalhe-maquina',
    loadComponent: () =>
      import('./pages/detalhe-maquina/detalhe-maquina.page').then(m => m.DetalheMaquinaPage)
  },
  {
    path: 'agendar',
    loadComponent: () =>
      import('./pages/agendar/agendar.page').then(m => m.AgendarPage)
  },
  {
    path: 'pagamento',
    loadComponent: () =>
      import('./pages/pagamento/pagamento.page').then(m => m.PagamentoPage)
  },
  {
    path: 'pagamento-sucesso',
    loadComponent: () =>
      import('./pages/pagamento-sucesso/pagamento-sucesso.page').then(m => m.PagamentoSucessoPage)
  },
  {
    path: 'pagamento-metodo',
    loadComponent: () =>
      import('./pages/pagamento-metodo/pagamento-metodo.page').then(m => m.PagamentoMetodoPage)
  },
  {
    path: 'notificacoes',
    loadComponent: () =>
      import('./pages/notificacoes/notificacoes.page').then(m => m.NotificacoesPage)
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.page').then(m => m.PerfilPage)
  },
  {
    path: 'pontos',
    loadComponent: () =>
      import('./pages/pontos/pontos.page').then(m => m.PontosPage)
  },
  {
    path: 'recuperar',
    loadComponent: () =>
      import('./pages/recuperar/recuperar.page').then(m => m.RecuperarPage)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
