export class Continente{
    private pais: string[]
    private continente: string
    constructor(pais: string[], continente: string){
        this.pais = pais
        this.continente = continente
    }
    public hasCountry(pais: string): boolean{
        let res:boolean = false
        let i = 0;
        while(!res && i < this.pais.length){
            res = this.pais[i] === pais
            i++
        }
        return res
    }
    public getContinente(): string{
        return this.continente
    }
}