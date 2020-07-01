export class Temperatura {
    constructor(public valor: number, public unidad: string){}
    static new(valor, unidad): Temperatura{
        return new Temperatura(valor,unidad)
    }
}
