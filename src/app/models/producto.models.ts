interface ImagenReferencial{
	id: Number,
	data: any
}

interface DetalleTecnico{
        nombre: String,
    	descripcion: String
}

export class Producto {
    constructor(public id: number,public nombre: string,public descripcion: string,
                public valoracion: number, public idProveedor: number,public idCategoria: number,
                public cantidad: number, public precioUnidad: number,  
                public imagenes:ImagenReferencial[], public detalles: DetalleTecnico[]){
    }
}