import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendarPage } from './agendar.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendarPageRoutingModule {}
