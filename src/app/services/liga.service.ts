import { Injectable } from '@angular/core';
import { Equipo } from '../model/equipo';
import { Calendario } from '../model/fecha';
import { Partido } from '../model/partido';

@Injectable({
  providedIn: 'root'
})
export class LigaService {

  private _fecha = 1;
  private cale:Calendario = new Calendario();

  private _teamNames = [
    "Real Madrid","Barcelona","Sevilla","Rayo Vallecano","Real Sociedad",
    "Albacete","Malaga","Levante","Betis","Elche"
  ]
  private _equipos:Array<Equipo>;
  private _resultados:Array<Array<Equipo>>;
  private _jornadas:Array<Array<Partido>>;

  constructor() {
    this._equipos = [];
    this._jornadas = [];
    this._resultados = [];
    this.generateTeams();
    this.sortearJornadas();
    this.sortearResultados();
   }
  
  private generateTeams() {
    let va:Array<Equipo> = [];
    for (let index = 0; index < this.teamNames.length; index++) {
      this.equipos.push(new Equipo(this.teamNames[index],0,0,0));
      va.push(new Equipo(this.teamNames[index],0,0,0));
    }

  }

  private sortearJornadas(){
    var vector1:Array<Equipo> = [];
    var vector2:Array<Equipo> = [];
    for (let index = 0,j = 4; index < this.equipos.length; index++) {
      if (index<this.equipos.length/2) {
        vector1[index]=this.equipos[index];
      }else{
        vector2[j]=this.equipos[index];
        j--;
      }
    }
    const limite = vector2[0];
    do {
      var jornada:Array<Partido> = [];
      for (let index = 0; index < vector1.length; index++) {
        var equipo1:Equipo = new Equipo(vector1[index].name,vector1[index].puntos,vector1[index].golesF,vector1[index].golesC);
        var equipo2:Equipo = new Equipo(vector2[index].name,vector2[index].puntos,vector2[index].golesF,vector2[index].golesC);
        jornada.push(new Partido(vector1[index],vector2[index]));
      }
      this.jornadas.push(jornada);

      var burbuja = vector1[vector1.length-1];
      for (let index = vector1.length-1; index >0; index--) {
        vector1[index]=vector1[index-1];
      }
      vector1[1]=vector2[0];

      for (let index = 0; index < vector2.length-1; index++) {
        vector2[index]=vector2[index+1];
      }
      vector2[vector2.length-1] = burbuja;
    } while (limite!=vector2[0]);
    let k = 0;
    for (let index = 0; index < this.cale.fechas.length; index++) {
      if (this.cale.fechas[index].diaSemana==="miércoles"||this.cale.fechas[index].diaSemana==="sábado") {
        for (let j = 0; j < this.jornadas[k].length; j++) {
          this.jornadas[k][j].dia=this.cale.fechas[index];
        }
        if (k<this.jornadas.length-1) {
          k++;
        }else{
          index = this.cale.fechas.length;
        }
      }
    }
  }

  private sortearResultados(){
    for (let index = 0; index < this.jornadas.length; index++) {
      this.resultados[index] = [];
     for (let j = 0; j < this.jornadas[index].length; j++) {
       this.jornadas[index][j].sortearGoles();
       var equipo1:Equipo = new Equipo(this.jornadas[index][j].casa.name,this.jornadas[index][j].casa.puntos,this.jornadas[index][j].casa.golesF,this.jornadas[index][j].casa.golesC);
       var equipo2:Equipo = new Equipo(this.jornadas[index][j].visitante.name,this.jornadas[index][j].visitante.puntos,this.jornadas[index][j].visitante.golesF,this.jornadas[index][j].visitante.golesC);
       var partido:Partido = new Partido(equipo1,equipo2);
       partido.dia = this.jornadas[index][j].dia;
       this.jornadas[index][j] = partido;
      }
      for (let k = 0; k < this.equipos.length; k++) {
        this.resultados[index][k] = new Equipo(this.equipos[k].name,this.equipos[k].puntos,this.equipos[k].golesF,this.equipos[k].golesC);
      }
    }
  }
    
  private sortResultados(resultados:Array<Equipo>){
    let ordenado:boolean;
    do {
      ordenado = true;
      for (let index = 0; index < resultados.length-1; index++) {
        if (resultados[index].puntos<resultados[index+1].puntos) {
          let burbuja:Equipo = resultados[index];
          resultados[index] = resultados[index+1];
          resultados[index+1] = burbuja;
          ordenado=false;
        }
      }
    } while (!ordenado);
  }

  public get teamNames(){
    return this._teamNames;
  }
  public get fecha(){
    return this._fecha;
  }
  public get jornadas(){
    return this._jornadas;
  }
  public set jornadas(nuevo:Array<Array<Partido>>){
    this._jornadas = nuevo;
  }
  public get resultados(){
    return this._resultados;
  }
  public set resultados(nuevo:Array<Array<Equipo>>){
    this._resultados = nuevo;
  }
  public get equipos():Array<Equipo>{
    return this._equipos;
  }
  public nextFecha(){
    if (this.fecha<9) {
      this._fecha++;
    }
  }
  public prevFecha(){
    if (this.fecha>1) {
      this._fecha--;
    }
  }
  public get jornadaActual():Array<Partido>{
    return this.jornadas[this.fecha-1];
  }
  public get resultadoActual():Array<Equipo>{
    this.sortResultados(this.resultados[this.fecha-1]);
    return this.resultados[this.fecha-1];
  }
}
