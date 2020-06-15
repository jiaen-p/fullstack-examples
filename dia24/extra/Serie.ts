import { Entregable } from "./Entregable"

export class Serie implements Entregable{
    private titulo: string
    private temporadas: number
    private genero: string
    private creador: string
    private entregado: boolean
    prestado:boolean
    constructor(titulo:string, temporadas: number = 3, entregado:boolean = false, genero: string, creador: string){
        this.titulo = titulo
        this.temporadas = temporadas
        this.entregado = entregado
        this.genero = genero
        this.creador = creador
    }
    public toString():string{
        return (`
        Titulo: ${this.titulo}
        Numero de temporadas: ${this.temporadas}
        Genero: ${this.genero}
        Creador: ${this.creador}
        Entregado: ${this.entregado}
        `)
    }

    public entregar():void{
        this.prestado = true
    }

    public devolver():void{
        this.prestado = false
    }

    public isEntregado():boolean{
        return this.prestado
    }

    public compareTo(obj: Object):number{
        return (<Serie>obj).getTemporadas()
    }

    public getTitulo(): string {
        return this.titulo
    }
    public setTitulo(value: string) {
        this.titulo = value
    }
    public getTemporadas(): number {
        return this.temporadas
    }
    public setTemporadas(value: number) {
        this.temporadas = value
    }
    public getGenero(): string {
        return this.genero
    }
    public setGenero(value: string) {
        this.genero = value
    }
    public getCreador(): string {
        return this.creador
    }
    public setCreador(value: string) {
        this.creador = value
    }
}