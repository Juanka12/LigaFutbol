import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JornadaPageRoutingModule } from './jornada-routing.module';

import { JornadaPage } from './jornada.page';
import { PartidoPage } from '../partido/partido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JornadaPageRoutingModule
  ],
  declarations: [JornadaPage,PartidoPage]
})
export class JornadaPageModule {}
