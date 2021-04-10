export interface ObjetoTabla{
    id: number;
    campos: Array<Campo>;
}

export interface Campo{
    nombre: string;
    tipo: string
}

export class ObjetoTabla{
    constructor(public id:number, public campos:Array<Campo>){

    }
}

export class Campo{
    constructor(public nombre: string, public tipo: string){

    }
}