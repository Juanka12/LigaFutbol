import { Equipo } from './equipo';
import { Fecha } from './fecha';

export class Partido{
    private _dia:Fecha;
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
    public sortearGoles(){
        var vencedor = !!+Math.random().toFixed();
        var golesVencedor = Math.floor(this.Random(1,7));
        var golesPerdedor = Math.floor(this.Random(0,golesVencedor))
        if (vencedor) {
            this.casa.golesF = golesVencedor;
            this.casa.golesC = golesPerdedor;
            this.visitante.golesF = golesPerdedor;
            this.visitante.golesC = golesVencedor;
            if (golesPerdedor==golesVencedor) {
                this.casa.puntos = this.casa.puntos+1;
                this.visitante.puntos = this.visitante.puntos+1;
            }else{
                this.casa.puntos = this.casa.puntos+3;
            }
        }else{
            this.casa.golesF = golesPerdedor;
            this.casa.golesC = golesVencedor;
            this.visitante.golesF = golesVencedor;
            this.visitante.golesC = golesPerdedor;
            if (golesPerdedor==golesVencedor) {
                this.casa.puntos = this.casa.puntos+1;
                this.visitante.puntos = this.visitante.puntos+1;
            }else{
                this.visitante.puntos = this.visitante.puntos+3;
            }
        }
    }

    private Random(min,max):number{
        return Math.random() * (max - min) + min;
    }
    
}