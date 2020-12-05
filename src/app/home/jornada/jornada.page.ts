import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Partido } from 'src/app/model/partido';
import { LigaService } from 'src/app/services/liga.service';

@Component({
  selector: 'app-jornada',
  templateUrl: './jornada.page.html',
  styleUrls: ['./jornada.page.scss'],
})
export class JornadaPage implements OnInit {
  
  constructor(private equipoService:LigaService, private route:Router) {}

  public nextFecha(){
    this.equipoService.nextFecha();
  }
  public prevFecha(){
    this.equipoService.prevFecha();
  }

  public get fecha(){
    return this.equipoService.fecha;
  }
  public get jornadaActual(){
    return this.equipoService.jornadaActual;
  }

  ngOnInit() {
  }

  public pasarPartido(partido:Partido){
    
    let va:Partido=partido;
    let extras:NavigationExtras={
      state:{
        pasado : va,
      }
    }
    this.route.navigate(["partido"],extras);
  }

}
