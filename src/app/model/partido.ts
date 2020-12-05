import { Equipo } from './equipo';
import { Fecha } from './fecha';

export class Partido{
    private _dia:Fecha;
    private _golesPorMinuto = Array.from(Array(2), () => []);
    constructor(private _casa:Equipo,private _visitante:Equipo){}

    public get casa(){
        return this._casa;
    }
    public get visitante(){
        return this._visitante;
    }
    public set casa(equipo:Equipo){
        this._casa = equipo;
    }
    public set visitante(equipo:Equipo){
        this._visitante = equipo;
    }
    public get dia(){
        return this._dia;
    }
    public set dia(dia:Fecha){
        this._dia = dia;
    }
    public get golesMinuto(){
        return this._golesPorMinuto;
    }
    public set golesMinuto(goles){
        this._golesPorMinuto = goles;
    }
    public sortearGoles(partido:Partido){
        let minutosPartido=90;
        let probable=5;
        
        for (let index = 1; index < minutosPartido; index++) {
            if (this.Random(0,30)==probable) {
                if (!!+Math.random().toFixed()) {
                    this._golesPorMinuto[0].push(index);
                    this._golesPorMinuto[1].push("");
                    this.casa.golesF ++;
                    partido.casa.golesF ++;
                    this.visitante.golesC ++;
                    partido.visitante.golesC ++;
                }else{
                    this._golesPorMinuto[1].push(index);
                    this._golesPorMinuto[0].push("");
                    this.visitante.golesF ++;
                    partido.visitante.golesF ++;
                    this.casa.golesC ++;
                    partido.casa.golesC ++;
                }
            }
        }
        if (this.casa.golesF>this.visitante.golesF) {
            this.casa.puntos = this.casa.puntos+3;
            partido.casa.puntos = partido.casa.puntos+3;
        }else if (this.casa.golesF<this.visitante.golesF) {
            this.visitante.puntos = this.visitante.puntos+3;
            partido.visitante.puntos = partido.visitante.puntos+3;
        }else{
            this.casa.puntos = this.casa.puntos+1;
            this.visitante.puntos = this.visitante.puntos+1;
            partido.casa.puntos = partido.casa.puntos+1;
            partido.visitante.puntos = partido.visitante.puntos+1;
        }
        
    }

    private Random(min,max):number{
        return Math.floor(Math.random() * (max - min) + min);
    }
    
}