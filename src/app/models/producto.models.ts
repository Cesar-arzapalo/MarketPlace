export interface Caracteristica{
        nombre: string,
    	descripcion: string
}

export class Producto {
    constructor(public id: string,public nombre: string,public descripcion: string,
                public valoracion: number, public visitas:number,
                public idProveedor: number,public idCategoria: number,
                public stock: number, public precioUnidad: number,
                public medida: string,public unidad: string,  
                public imagenesRefereciales:string[], public caracteristicas: string[]){
    }
}

