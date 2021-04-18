export class CategoriaArbol{
    constructor(public nombre: string, public categoriasHijas: CategoriaArbol[], public referencia:string, public padre?: CategoriaArbol){

    }
}