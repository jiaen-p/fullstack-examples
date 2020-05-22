import { Electrodomestico } from './Electrodomestico'

export class Television extends Electrodomestico{
    private resolucion: number
    private sintonizadorTDT: boolean
    constructor(resolucion:number, TDT:boolean ,consumoEnergetico?: string, color?: string , precioBase?:number , peso?:number ){
        super(consumoEnergetico, color , precioBase , peso)
        this.resolucion = resolucion
        this.sintonizadorTDT = TDT
    }
    public precioFinal():number{
        let total = this.Precio()
        if(this.sintonizadorTDT){
            total += 50
        }
        if(this.resolucion > 40){
            total += total*.3
        }
        return total
    }
    public getResolucion():number{
        return this.resolucion
    }
    public setResolucion(resolucion: number){
        this.resolucion = resolucion
    }
    public getSintonizadorTDT(): boolean {
        return this.sintonizadorTDT
    }
    public setSintonizadorTDT(TDT: boolean) {
        this.sintonizadorTDT = TDT
    }
    private Precio():number{
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