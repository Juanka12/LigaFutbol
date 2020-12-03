export class Equipo {

    constructor(private _name: string, private _puntos: number, private _golesF: number, private _golesC: number) { }

    public get name():string {
        return this._name;
    }
    public get puntos():number {
        return this._puntos;
    }
    public get golesF():number {
        return this._golesF;
    }
    public get golesC():number {
        return this._golesC;
    }
    public set name(name:string) {
        this._name = name;
    }
    public set puntos(p:number) {
        this._puntos = p;
    }
    public set golesF(p:number) {
        this._golesF = p;
    }
    public set golesC(p:number) {
        this._golesC = p;
    }

    public addGol(gol:number){
        this._golesF += gol;
    }
    public copiar():Equipo{
        var e:Equipo = new Equipo(this.name,this.puntos,this.golesF,this.golesC);
        return e;
    }
}