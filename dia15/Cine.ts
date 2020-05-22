import { Pelicula } from "./Pelicula";
import { Espectador } from "./Espectador";
enum columna{
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F",
    G = "G",
    H = "H",
    I = "I"
}
type Columna = keyof typeof columna
type Fila = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 
export type Asiento = [Columna, Fila]

export class Cine{
    private pelicula: Pelicula
    private precio: number
    private asientosOcupados: Asiento[] = []
    constructor(pelicula: Pelicula, precio:number = 10){
        this.pelicula = pelicula
        this.precio = precio
        
    }
    public getPelicula():Pelicula{
        return this.pelicula
    }
    public getPrecio():number{
        return this.precio
    }
    private comprobarAsiento():Asiento{
        let ocupado:boolean = false
        let asientoAsignado:Asiento 
        let chars: string = 'ABCDEFGHI'
        while(!ocupado){
            let c: Columna = <Columna>chars[Math.floor(Math.random()*9)]
            let f: Fila = <Fila>Math.floor(Math.random()*8 + 1)
            asientoAsignado = [c,f]
            ocupado = !this.incluye(asientoAsignado)
        }
        this.asientosOcupados.push(asientoAsignado)
        return asientoAsignado
    }
    public comprarEntrada(espectador: Espectador):void{
        let res = ''
        if (this.asientosOcupados.length === 72){
            res = 'No hay mas asientos disponibles'
        } else if(espectador.getDinero() >= this.precio && espectador.getEdad() >= this.pelicula.getEdadMin()){
            let asientoAsignado: Asiento = this.comprobarAsiento()
            res = asientoAsignado + ' Es tu asiento'
        } else {
            res = 'No tiene suficiente dinero/edad para esta peli'
        }
        espectador.setAsiento(res)
    }
    private incluye(asiento: Asiento):boolean{
        let ocupado: boolean = false
        let i = 0
        while (!ocupado && i < this.asientosOcupados.length){
            ocupado = this.asientosOcupados[i][0] === asiento[0] && this.asientosOcupados[i][1] === asiento[1]
            i++
        }
        return ocupado
    }
}