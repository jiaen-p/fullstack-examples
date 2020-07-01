export enum palos{
    espadas = "espadas",
    bastos = "bastos",
    oros = "oros",
    copas = "copas"
}
export type Numero = 1|2|3|4|5|6|7|10|11|12

export type Palo = keyof typeof palos

export interface carta{
    numero: Numero
    palo: Palo
}
export class Carta implements carta{
    numero: Numero
    palo: Palo
    constructor(n: Numero, p: Palo){
        this.numero = n
        this.palo = p
    }
}
export class Baraja{
    private cartas:Carta[] = []
    private monton:Carta[] = []
    constructor(palo: Palo[] = ["espadas", "bastos", "oros", "copas"], num: Numero[] = [1,2,3,4,5,6,7,10,11,12] ){
        palo.forEach(p => {
            num.forEach(n => {
                this.cartas.push(new Carta(n, p))
            })
        })
    }
    public barajar(){  
        for(let i = 0; i < 40; i++){
            let j = Math.floor( Math.random() * 40 )
            let cartaTemp = this.cartas[i]
            this.cartas[i] = this.cartas[j]
            this.cartas[j] = cartaTemp
        }

    }
    public siguienteCarta(): Carta | string{
        let carta:Carta | string = this.cartas.shift()
        if (carta === undefined){
            carta = 'Ya no quedan mas cartas en la Baraja'
        } else {
            this.monton.push(carta)
        }
        return carta
    }
    public cartasDisponibles():number{
        return this.cartas.length
    }
    public darCartas(n: number):Carta[] | string{
        let cartas: Carta[] | string = []
        if ( this.cartas.length >= n){
            cartas = this.cartas.splice(0,n)
            this.monton = this.monton.concat(cartas)
        } else {
            cartas = 'No hay suficientes cartas disponibles'
        }
        return cartas
    }
    public cartasMonton():carta[] | string{
        let cartas:carta[] | string = this.monton
        if (cartas.length === 0){
            cartas = 'No ha salido cartas todavia'
        }
        return cartas
    }
    public mostrarBaraja():carta[]{
        return this.cartas
    }
}