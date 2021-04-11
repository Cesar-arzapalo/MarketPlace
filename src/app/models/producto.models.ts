interface DetalleTecnico{
        nombre: String,
    	descripcion: String
}

export class Producto {
    constructor(public id: number,public nombre: string,public descripcion: string,
                public valoracion: number, public visitas:number,
                public idProveedor: number,public idCategoria: number,
                public stock: number, public precioUnidad: number,
                public medida: string,public unidad: string,  
                public imagenesReferenciales:string[], public detalles: DetalleTecnico[]){
    }
}

