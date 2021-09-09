import { Producto } from './producto.models';
export class ProductoSolicitado{
    constructor(public producto:Producto, public cantidad:number){

    }
}
export class ProductoSolicitadoDB{
    constructor(public productoReferencia:string, public cantidad:number){

    }
}
export class Pedido{
    constructor(public fechaEmision:Date, public productos:ProductoSolicitado[]){

    }

    getMontoTotal(){
        var monto:number = 0;
        this.productos.map(producto => monto+=producto.cantidad*producto.producto.precioUnidad)
        return monto;
    }
}

export class PedidoDB{
    constructor(public usuario: string, public fechaEmision:Date, public productosReferencia:Object[]){

    }
}