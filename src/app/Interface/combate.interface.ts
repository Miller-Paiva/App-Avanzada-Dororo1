export class Combate{
    
    id:number;
    lugar_Combate:string;
    ganador:string;
    demonio_Combate: string;
    constructor(
        id:number,
        lugar_Combate:string,
        ganador:string,
        demonio_Combate:string    
    ){
        this.id=id;
        this.lugar_Combate=lugar_Combate;
        this.ganador=ganador;
        this.demonio_Combate=demonio_Combate;
    }
    
}