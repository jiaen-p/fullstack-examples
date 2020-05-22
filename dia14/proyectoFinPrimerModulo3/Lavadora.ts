import { Electrodomestico } from './Electrodomestico'
export class Lavadora extends Electrodomestico{
    private carga: number
    constructor(carga:number = 5, consumoEnergetico?: string, color?: string , precioBase?:number , peso?:number ){
        super(consumoEnergetico, color, precioBase, peso)
        this.carga = carga
    }
    getCarga(): number{
        return this.carga
    }
    setCarga(carga: number){
        this.carga = carga
    }
    precioFinal():number{
        let total = this.Precio()
        if (this.carga > 30){
            total += 30
        }
        return total
    }
    Precio():number{
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
}
