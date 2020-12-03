import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'jornada',
        children: [
          {
            path: '',
            loadChildren: () => import('./jornada/jornada.module').then( m => m.JornadaPageModule)
          }
        ]
      },
      {
        path: 'clasificacion',
        children: [
          {
            path: '',
            loadChildren: () => import('./clasificacion/clasificacion.module').then( m => m.ClasificacionPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/jornada',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/home/jornada',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
