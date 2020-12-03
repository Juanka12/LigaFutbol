import { Component, OnInit } from '@angular/core';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-clasificacion',
  templateUrl: './clasificacion.page.html',
  styleUrls: ['./clasificacion.page.scss'],
})
export class ClasificacionPage implements OnInit {

  constructor(private equipoService:LigaService) {}

  public get fecha(){
    return this.equipoService.fecha;
  }

  public get equipos(){
    return this.equipoService.resultadoActual;
  }
  ngOnInit() {
  }

}
