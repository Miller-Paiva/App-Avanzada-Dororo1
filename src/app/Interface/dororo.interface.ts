export class Dororo{
    id:number;
    imagendororo:string;
    producto: string;
    descripcion: string;
    origen: string;
    constructor( 
        id:number,
        imagendororo:string,
        producto: string,
        descripcion: string,
        origen: string){
            this.id=id;
            this.producto=producto;
            this.descripcion=descripcion;
            this.origen=origen;
            this.imagendororo=imagendororo;
            
        }
}