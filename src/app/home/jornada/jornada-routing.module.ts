import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JornadaPage } from './jornada.page';

const routes: Routes = [
  {
    path: '',
    component: JornadaPage
  },
  {
    path: 'partido',
    loadChildren: () => import('../partido/partido.module').then( m => m.PartidoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JornadaPageRoutingModule {}
