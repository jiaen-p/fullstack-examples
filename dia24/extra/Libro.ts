import { Entregable } from "./Entregable"

export class Libro implements Entregable{
    private titulo:string
    private autor: string
    private horas: number
    private genero: string
    private editorial: string
    prestado: boolean
    constructor(titulo: string, autor: string, horas: number = 40, prestado: boolean = false, genero: string, editorial: string){
        this.titulo = titulo,
        this.autor = autor,
        this.horas = horas,
        this.genero = genero,
        this.editorial = editorial,
        this.prestado = prestado
    }
    public toString():string{
        return(`
        Titulo: ${this.titulo}
        Autor: ${this.autor}
        Horas estimadas: ${this.horas}
        Genero: ${this.genero}
        Editorial: ${this.editorial}
        Prestado: ${this.prestado}
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
        return (<Libro>obj).getHoras() - this.horas
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getHoras(): number {
        return this.horas;
    }

    public setHoras(horas: number): void {
        this.horas = horas;
    }

    public getGenero(): string {
        return this.genero;
    }

    public setGenero(genero: string): void {
        this.genero = genero;
    }

    public getEditorial(): string {
        return this.editorial;
    }

    public setEditorial(editorial: string): void {
        this.editorial = editorial;
    }

}