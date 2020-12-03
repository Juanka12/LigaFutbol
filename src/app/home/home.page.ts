import { Component } from '@angular/core';
import { LigaService } from '../services/liga.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private equipoService:LigaService) {}

  public nextFecha(){
    this.equipoService.nextFecha();
  }
  public prevFecha(){
    this.equipoService.prevFecha();
  }

  public get fecha(){
    return this.equipoService.fecha;
  }
}
