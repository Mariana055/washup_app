import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // -----------------------------------
  // PUBLIC (acesso sem login)
  // -----------------------------------
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
    path: 'recuperar',
    loadComponent: () =>
      import('./pages/recuperar/recuperar.page').then(m => m.RecuperarPage)
  },

  // -----------------------------------
  // SECURE (após login)
  // -----------------------------------
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
    path: 'agendar',
    loadComponent: () =>
      import('./pages/agendar/agendar.page').then(m => m.AgendarPage)
  },
  {
    path: 'pontos',
    loadComponent: () =>
      import('./pages/pontos/pontos.page').then(m => m.PontosPage)
  },
  {
    path: 'perfil',
    loadComponent: () =>
      import('./pages/perfil/perfil.page').then(m => m.PerfilPage)
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

