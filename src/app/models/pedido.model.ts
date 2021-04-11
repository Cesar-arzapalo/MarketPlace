import { Producto } from './producto.models';
export class ProductoSolicitado{
    constructor(public producto:Producto, public cantidad:number){

    }
}
export class Pedido{
    constructor(public fechaEmision:Date, public productos:ProductoSolicitado[]){

    }
}