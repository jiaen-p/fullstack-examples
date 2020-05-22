enum consumoEnergeticos{
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    E = "E",
    F = "F"
}
type ConsumoEnergetico = keyof typeof consumoEnergeticos

enum coloresDisponibles{
    blanco = "blanco",
    negro = "negro",
    rojo = "rojo",
    azul = "azul",
    gris = "gris"
}

type Color = keyof typeof coloresDisponibles
export class Electrodomestico{
    protected consumoEnergetico: ConsumoEnergetico
    protected color: Color
    protected peso: number
    protected precioBase: number
    constructor(consumoEnergetico: string, color: string, precioBase:number = 100, peso:number = 5){
        this.consumoEnergetico = this.comprobarConsumoEnergetico(consumoEnergetico)
        this.precioBase = precioBase
        this.color = this.comprobarColor(color)
        this.peso = peso
    }
    getConsumoEnergetico():ConsumoEnergetico{
        return this.consumoEnergetico
    }
    setComsumoEnergetico(consumoEnergetico:ConsumoEnergetico){
        this.consumoEnergetico = consumoEnergetico
    }
    getColor():Color{
        return this.color
    }
    setColor(color:Color){
        this.color = color
    }
    getPeso():number{
        return this.peso
    }
    setPeso(peso:number){
        this.peso = peso
    }
    getPrecioBase():number{
        return this.precioBase
    }
    setPrecioBase(precio: number){
        this.precioBase = precio
    }
    protected precioFinal():number{
        let precioFinal:number = this.precioBase
        switch(this.consumoEnergetico){
            case "A":
                precioFinal += 100
                break;
            case "B":
                precioFinal += 80
                break;
            case "C":
                precioFinal += 60
                break;
            case "D":
                precioFinal += 50
                break;
            case "E":
                precioFinal += 30
                break;
            default:
                precioFinal += 10
        }
        if (this.peso >= 0 && this.peso < 19){
            precioFinal += 10
        } else if (this.peso >= 19 && this.peso < 49){
            precioFinal += 50
        } else if (this.peso >= 50 && this.peso < 79){
            precioFinal += 80
        } else {
            precioFinal += 100
        }
        return precioFinal
    }
    private comprobarConsumoEnergetico(c: string): ConsumoEnergetico{
        let char:ConsumoEnergetico = "F"
        if ((<any>Object).values(consumoEnergeticos).includes(c)){
            char = <ConsumoEnergetico>c
        }
        return char
    }
    private comprobarColor(color: string): Color{
        let col: Color = "blanco"
        if((<any>Object).values(coloresDisponibles).includes(color)){
            col = <Color>color
        }
        return col
    }
    public static PrecioElectrodomestico(Electrodomestico: Electrodomestico):number{
        let precioFinal:number = Electrodomestico.precioBase
        switch(Electrodomestico.consumoEnergetico){
            case "A":
                precioFinal += 100
                break;
            case "B":
                precioFinal += 80
                break;
            case "C":
                precioFinal += 60
                break;
            case "D":
                precioFinal += 50
                break;
            case "E":
                precioFinal += 30
                break;
            default:
                precioFinal += 10
        }
        if (Electrodomestico.peso >= 0 && Electrodomestico.peso < 19){
            precioFinal += 10
        } else if (Electrodomestico.peso >= 19 && Electrodomestico.peso < 49){
            precioFinal += 50
        } else if (Electrodomestico.peso >= 50 && Electrodomestico.peso < 79){
            precioFinal += 80
        } else {
            precioFinal += 100
        }
        return precioFinal
    }
}
